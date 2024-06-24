import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    marginLeft: 16,
    columnGap: 16,
    marginVertical: 16,
  },
  imageContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#A40D0D",
    borderRadius: 10,
  },
  bodyContainer: {
    justifyContent: "center",
    height: 50,
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title1: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16,
    color: "#A40D0D",
    fontFamily: "AbrilFatface",
  },
  title2: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: "#A40D0D",
  },
});
