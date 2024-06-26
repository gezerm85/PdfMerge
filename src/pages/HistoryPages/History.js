import { Text, View, ScrollView } from "react-native";
import React from "react";
import styles from "./History.style";
import Fonts from "../../components/Fonts/Fonts";
import PdfCard from "../../components/Cards/PdfCard";
import { useSelector } from "react-redux";

const History = () => {
  const { onLayoutRootView, fontsLoaded, fontError } = Fonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const { mergedListPdf } = useSelector((state) => state.pdf);

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>History</Text>
      <ScrollView>
        <Text> {mergedListPdf.uri} </Text>
      </ScrollView>
    </View>
  );
};

export default History;
