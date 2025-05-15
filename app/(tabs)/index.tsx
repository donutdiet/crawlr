import { View, Text } from "react-native";
import React, { useMemo } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import { defaultStyles } from "@/constants/Styles";
import osuBarsData from "@/data/osu_bars.json";
import BarList from "@/components/BarList";

const Page = () => {
  const bars = useMemo(() => osuBarsData as any, []);
  return (
    <View style={defaultStyles.container}>
      <Stack.Screen options={{ header: () => <ExploreHeader /> }} />
      <BarList bars={bars} />
    </View>
  );
};

export default Page;
