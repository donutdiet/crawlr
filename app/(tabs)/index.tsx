import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Bars from "@/components/Bars";
import { defaultStyles } from "@/constants/Styles";

const Page = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack.Screen options={{ header: () => <ExploreHeader /> }} />
      <Bars />
    </View>
  );
};

export default Page;
