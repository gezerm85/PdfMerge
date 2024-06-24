import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Fonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    Inter: require("../../../assets/fonts/Inter.ttf"),
    AbrilFatface: require("../../../assets/fonts/AbrilFatface.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return { onLayoutRootView, fontsLoaded, fontError };
};

export default Fonts;
