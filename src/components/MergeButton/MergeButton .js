import { Pressable, Alert } from "react-native";
import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./MergeButton.style";
import { useSelector, useDispatch } from "react-redux";
import { setMergedPdf } from "../../redux/pdfSlice";
import { PDFDocument } from "pdf-lib";
import * as FileSystem from "expo-file-system";

const MergeButton = () => {
  const dispatch = useDispatch();
  const { files, mergedPdf } = useSelector((state) => state.pdf);

  let pdfUri = files.flatMap((sublist) => sublist.map((item) => item.uri));

  console.log("asfasf", mergedPdf);

  const mergePdfs = async () => {
    try {
      const mergedPdf = await PDFDocument.create();

      for (const file of pdfUri) {
        const fileUri = file;
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        if (!fileInfo.exists) {
          throw new Error(`Dosya bulunamadı: ${fileUri}`);
        }

        const existingPdfBytes = await FileSystem.readAsStringAsync(fileUri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        const existingPdf = await PDFDocument.load(
          Uint8Array.from(atob(existingPdfBytes), (c) => c.charCodeAt(0))
        );

        const copiedPages = await mergedPdf.copyPages(
          existingPdf,
          existingPdf.getPageIndices()
        );

        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });
      }

      const mergedPdfBytes = await mergedPdf.save();
      const mergedPdfUri = `data:application/pdf;base64,${mergedPdfBytes.toString(
        "base64"
      )}`;

      dispatch(setMergedPdf(mergedPdfUri));

      Alert.alert("Başarılı", "PDF birleştirme işlemi tamamlandı.");
    } catch (error) {
      console.error("PDF birleştirme işleminde hata oluştu:", error);
      Alert.alert("Hata", "PDF birleştirme işlemi sırasında bir hata oluştu.");
    }
  };

  return (
    <Pressable
      onPress={() => mergePdfs}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#A42516" : "rgba(164, 37, 22, 0.5)",
        },
        styles.iconContainer,
      ]}
    >
      <MaterialCommunityIcons name="axis-z-arrow" size={26} color="#fff" />
    </Pressable>
  );
};

export default MergeButton;
