import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./Home.style";
import { Ionicons } from "@expo/vector-icons";
import Fonts from "../../components/Fonts/Fonts";

const Home = () => {
  const { onLayoutRootView, fontsLoaded, fontError } = Fonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View>
        <Image
          style={styles.pdfIcon}
          source={require("../../../assets/images/pdfIcon.png")}
        />
        <Text style={styles.title}>You don’t have any PDF Documents</Text>
        <Image
          style={styles.frame}
          source={require("../../../assets/images/Frame.png")}
        />

        <View style={styles.buttonContainer}>
          <Image
            style={styles.frameArrow}
            source={require("../../../assets/images/FrameArrow.png")}
          />
          <Pressable style={styles.buttonBody}>
            <Ionicons name="add" size={32} color="#fff" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;
