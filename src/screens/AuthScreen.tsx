import React from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import ShopDetail from "../components/ShopDetail";
import { SafeAreaView } from "react-native-safe-area-context";

// type Props = {
//   navigation: StackNavigationProp<RootStackParamList, "Shop">;
//   route: RouteProp<RootStackParamList, "Shop">; //渡ってくる値に対するもの
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
});

export const AuthScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>ログイン中</Text>
    </SafeAreaView>
  );
};
