import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./PdfPick.style";
import Fonts from "../Fonts/Fonts";
import { Ionicons } from "@expo/vector-icons";

const PdfPick = ({ onPress }) => {
  const { onLayoutRootView, fontsLoaded, fontError } = Fonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View>
        <View style={styles.bodyContainer}>
          <Image
            style={styles.pdfIcon}
            source={require("../../../assets/images/pdfIcon.png")}
          />
        </View>
        <Text style={styles.title}>You don’t have any PDF Documents</Text>
        <Image
          style={styles.frame}
          source={require("../../../assets/images/Frame.png")}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.innerContainer}>
            <Image
              style={styles.frameArrow}
              source={require("../../../assets/images/FrameArrow.png")}
            />
          </View>
          <Pressable style={styles.buttonBody} onPress={onPress}>
            <Ionicons name="add" size={32} color="#fff" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PdfPick;
