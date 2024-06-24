import { Text, View, ScrollView } from "react-native";
import React from "react";
import styles from "./History.style";
import Fonts from "../../components/Fonts/Fonts";
import PdfCard from "../../components/Cards/PdfCard";

const History = () => {
  const { onLayoutRootView, fontsLoaded, fontError } = Fonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>History</Text>
      <ScrollView>
        <PdfCard />
        <PdfCard />
        <PdfCard />
        <PdfCard />
        <PdfCard />
        <PdfCard />
      </ScrollView>
    </View>
  );
};

export default History;
