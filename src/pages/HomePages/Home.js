import React, { useState } from "react";
import { Text, View, Image, Pressable, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as DocumentPicker from "expo-document-picker";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Home.style";
import Fonts from "../../components/Fonts/Fonts";
import { addPdf } from "../../redux/pdfSlice";
import Merge from "../../components/PdfMerge/Merge";
import PdfPick from "../../components/PdfPick/PdfPick";

const Home = () => {
  const dispatch = useDispatch();
  const { files } = useSelector((state) => state.pdf);
  const pickPdf = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        multiple: true,
      });
      if (res.assets.length >= 2) {
        dispatch(addPdf(res.assets));
      } else {
        Alert.alert("Uyarı", "En az 2 PDF belgesi seçmelisiniz.");
      }
    } catch (error) {
      console.error("Belge seçilirken hata oluştu:", error);
      Alert.alert("Hata", "Belge seçilirken bir hata oluştu.");
    }
  };

  return (
    <View style={styles.container}>
      {files.length > 0 ? (
        <Merge onPress={pickPdf} count={files.length} />
      ) : (
        <PdfPick onPress={pickPdf} />
      )}
    </View>
  );
};

export default Home;
