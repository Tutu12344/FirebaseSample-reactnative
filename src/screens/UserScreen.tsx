import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";

import { RootStackParamList } from "../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";

import { RouteProp } from "@react-navigation/native";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "User">;
  route: RouteProp<RootStackParamList, "User">; //渡ってくる値に対するもの
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export const UserScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  return (
    <View style={styles.container}>
      <Text>aa</Text>
    </View>
  );
};

// export default UserScreen;
