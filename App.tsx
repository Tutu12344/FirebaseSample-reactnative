import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native";
import ShopReviewItem from "./src/components/ShopReviewItem";
import { getShops } from "./src/lib/firebase";
import { Shop } from "./src/types/shop";

export default function App() {
  const [shops, setShops] = useState<Shop[]>([]);
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const shops = await getShops();
    setShops(shops);
  };
  const shopItems = shops.map((shop, index) => (
    // <View style={{ margin: 10 }} key={index.toString()}>
    //   <Text>{shop.name}</Text>
    // <Text>{shop.place}</Text>
    // {console.log}
    // </View>
    <ShopReviewItem shop={shop} key={index.toString()} />
  ));
  return (
    <SafeAreaView style={styles.container}>
      {/* {shopItems}
      <StatusBar style="auto" /> */}
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem shop={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
