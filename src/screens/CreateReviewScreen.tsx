import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";

import { RouteProp } from "@react-navigation/native";
import { IconButton } from "../components/IconButton";
type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
  route: RouteProp<RootStackParamList, "CreateReview">; //渡ってくる値に対するもの
};

const styles = StyleSheet.create({
  container: {},
});

export const CreateReviewScreen: React.FC<Props> = ({
  navigation,
  route,
}: Props) => {
  const { shop } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton name="x" onPress={() => navigation.goBack()} />
      ),
    });
  });
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};
