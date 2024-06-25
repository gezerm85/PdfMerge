import { Text, View, Image } from "react-native";
import React from "react";
import Fonts from "../Fonts/Fonts";
import styles from "./PdfCard.style";

const PdfCard = ({ title, index }) => {
  const { onLayoutRootView, fontsLoaded, fontError } = Fonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.icon}
          source={require("../../../assets/images/pdfIcon.png")}
        />
      </View>
      <View style={styles.bodyContainer} onLayout={onLayoutRootView}>
        <Text style={styles.title1}>{title.name}</Text>
        <Text style={styles.title2}>{index}</Text>
      </View>
    </View>
  );
};

export default PdfCard;
