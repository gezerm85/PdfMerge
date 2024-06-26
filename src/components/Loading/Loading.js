import React from "react";
import LottieView from "lottie-react-native";
import styles from "./Loading.style";

const Loading = () => {
  return (
    <LottieView
      style={styles.container}
      source={require("../../../assets/images/Loading.json")}
      autoPlay
      loop
    />
  );
};

export default Loading;
