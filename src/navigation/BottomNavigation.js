import { View, StyleSheet, Text, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigation from "./StackNavigation";
import History from "../pages/HistoryPages/History";
import MergeButton from "../components/MergeButton/MergeButton ";
import { Entypo, Octicons, Ionicons } from "@expo/vector-icons";
import Fonts from "../components/Fonts/Fonts";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const { onLayoutRootView, fontsLoaded, fontError } = Fonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: () => null,
        tabBarStyle: {
          height: 70,
        },
        headerStyle: {
          height: 134,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
        },
        tabBarActiveTintColor: "#A42516",
        tabBarInactiveTintColor: "rgba(164, 37, 22, 0.5)",
        headerTitle: () => (
          <View style={styles.titleContainer} onLayout={onLayoutRootView}>
            <Text style={styles.pdf}>.pdf </Text>
            <Text style={styles.merge}>Merge</Text>
          </View>
        ),
        headerRight: () => <Ionicons name="add" size={32} color="#A42516" />,
        headerRightContainerStyle: {
          alignSelf: "flex-end",
          bottom: 23,
          right: 16,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="grid" size={24} color={color} />
          ),
        }}
        name="HomePages"
        component={StackNavigation}
      />

      <Tab.Screen
        options={{
          tabBarIcon: (props) => <MergeButton {...props} />,
        }}
        name="Merge"
        component={StackNavigation}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="history" size={24} color={color} />
          ),
          headerRight: false,
        }}
        name="History"
        component={History}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "rgba(255, 244, 242, 0.9)",
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  pdf: {
    fontFamily: "AbrilFatface",
    fontSize: 58.24,
    fontWeight: "400",
    lineHeight: 78.57,
    color: "#A42516",
  },
  merge: {
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 78.57,
    color: "#A42516",
    alignSelf: "flex-end",
    right: 10,
    width: 100,
  },
});
