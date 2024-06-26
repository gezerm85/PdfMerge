import React, { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { PDFDocument } from "pdf-lib";
import * as FileSystem from "expo-file-system";

import { setMergedPdf, setMergedListPdf } from "../../redux/pdfSlice";
import styles from "./MergeButton.style";
import Loading from "../Loading/Loading";
import react from "react";

const MergeButton = () => {
  const dispatch = useDispatch();
  const { files, mergedPdf, mergedListPdf } = useSelector((state) => state.pdf);
  const [fileInfo, setFileInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log("FİLE", fileInfo);
  console.log("list", mergedListPdf);

  const pdfUri = files.flatMap((sublist) => sublist.map((item) => item.uri));

  const mergePdfs = async () => {
    try {
      setIsLoading(true);
      const mergedPdf = await PDFDocument.create();

      for (const file of pdfUri) {
        const fileInfo = await FileSystem.getInfoAsync(file);
        if (!fileInfo.exists) {
          throw new Error(`Dosya bulunamadı: ${file}`);
        }

        const existingPdfBytes = await FileSystem.readAsStringAsync(file, {
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

        const pageCount = existingPdf.getPageCount();
        setFileInfo([{ name: fileInfo.uri.split("/").pop(), pageCount }]);
      }

      const mergedPdfBytes = await mergedPdf.save();
      const mergedPdfUri = `data:application/pdf;base64,${mergedPdfBytes.toString(
        "base64"
      )}`;

      dispatch(setMergedPdf(mergedPdfUri));
      dispatch(setMergedListPdf(fileInfo));

      setIsLoading(false);

      Alert.alert("Başarılı", "PDF birleştirme işlemi tamamlandı.");
    } catch (error) {
      console.error("PDF birleştirme işleminde hata oluştu:", error);
      Alert.alert("Hata", "PDF birleştirme işlemi sırasında bir hata oluştu.");
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <Pressable
        onPress={mergePdfs}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#A42516" : "rgba(164, 37, 22, 0.5)",
          },
          styles.iconContainer,
        ]}
      >
        <MaterialCommunityIcons name="axis-z-arrow" size={26} color="#fff" />
      </Pressable>
    </View>
  );
};

export default react.memo(MergeButton);
