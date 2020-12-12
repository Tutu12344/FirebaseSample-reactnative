import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { HomeStackNavigator } from "./HomeStackNavigator";
import { MainTabNavigator } from "./MainTabNavigator";
import { AuthScreen } from "../screens/AuthScreen";
export const AppNavigator = () => {
  const user = { id: "123" };
  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
      {/* <MainTabNavigator /> */}
    </NavigationContainer>
  );
};

// export default AppNavigator
