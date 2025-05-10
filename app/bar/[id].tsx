import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log("[id].tsx: bar id: " + id + " details page opened");
  return (
    <View>
      <Text>Bar {id} details page</Text>
    </View>
  );
};

export default Page;
