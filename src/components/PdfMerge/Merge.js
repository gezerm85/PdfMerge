import { Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import PdfCard from "../Cards/PdfCard";
import styles from "./Merge.style";
import Fonts from "../Fonts/Fonts";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Merge = ({ onPress, count }) => {
  const { onLayoutRootView, fontsLoaded, fontError } = Fonts();

  const { files, mergedListPdf } = useSelector((state) => state.pdf);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer} onLayout={onLayoutRootView}>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.title}> files will be merged.</Text>
      </View>
      <ScrollView>
        <PdfCard item={mergedListPdf} />
      </ScrollView>
      <Pressable style={styles.buttonBody} onPress={onPress}>
        <Ionicons name="add" size={32} color="#fff" />
      </Pressable>
    </View>
  );
};

export default Merge;
