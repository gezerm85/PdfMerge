import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEFED",
    position: "relative",
  },
  titleContainer: {
    flexDirection: "row",
    marginLeft: 16,
    marginTop: 16,
  },
  count: {
    fontWeight: "600",
    fontSize: 18,
    color: "#A42516",
    fontFamily: "Inter",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    color: "#000",
    fontFamily: "Inter",
  },
  buttonBody: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    backgroundColor: "#A40D0D",
    borderRadius: 32.5,
    borderWidth: 5,
    borderColor: "rgba(255, 255, 255, 0.9)",
    bottom: 20,
    right: 20,
  },
});
