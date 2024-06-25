import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEFED",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    alignItems: "center",
  },
  pdfIcon: {
    width: 109,
    height: 109,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#A42516",
    fontFamily: "Inter",
  },
  buttonContainer: {
    alignItems: "center",
  },
  buttonBody: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    backgroundColor: "#A40D0D",
    borderRadius: 32.5,
    borderWidth: 5,
    borderColor: "rgba(255, 255, 255, 0.9)",
    bottom: 20,
  },
  frame: {
    width: 120,
    height: 9,
    alignSelf: "flex-end",
  },
  innerContainer: {
    width: "100%",
  },
  frameArrow: {
    width: 112,
    height: 112,
    resizeMode: "contain",
    alignSelf: "flex-end",
  },
});
