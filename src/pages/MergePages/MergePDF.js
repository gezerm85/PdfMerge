import { Text, View, ScrollView } from "react-native";
import React from "react";
import PdfCard from "../../components/Cards/PdfCard";
import styles from "./MergePDF.style";
import Fonts from "../../components/Fonts/Fonts";

const MergePDF = () => {
  const { onLayoutRootView, fontsLoaded, fontError } = Fonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer} onLayout={onLayoutRootView}>
        <Text style={styles.count}>3</Text>
        <Text style={styles.title}> files will be merged.</Text>
      </View>
      <ScrollView>
        <PdfCard />
        <PdfCard />
        <PdfCard />
      </ScrollView>
    </View>
  );
};

export default MergePDF;
