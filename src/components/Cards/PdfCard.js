import { Text, View, Image } from "react-native";
import React from "react";
import Fonts from "../Fonts/Fonts";
import styles from "./PdfCard.style";
import { useSelector } from "react-redux";

const PdfCard = ({ item }) => {
  const { onLayoutRootView, fontsLoaded, fontError } = Fonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }
  const { mergedListPdf } = useSelector((state) => state.pdf);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.icon}
          source={require("../../../assets/images/pdfIcon.png")}
        />
      </View>
      <View style={styles.bodyContainer} onLayout={onLayoutRootView}>
        <Text style={styles.title1}>{mergedListPdf}</Text>
        <Text style={styles.title2}>0</Text>
      </View>
    </View>
  );
};

export default PdfCard;
