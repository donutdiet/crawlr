import { View, Text } from "react-native";
import React, { useMemo } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import { defaultStyles } from "@/constants/Styles";
import osuBarsData from "@/data/osu_bars";
import data from "@/data/osu_bars";
import BarMap from "@/components/BarMap";
import BarList from "@/components/BarList";

const Page = () => {
  const bars = useMemo(() => osuBarsData as any, []);
  return (
    <View style={defaultStyles.container}>
      <Stack.Screen options={{ header: () => <ExploreHeader /> }} />
      {/* <BarList bars={data} /> */}
      <BarMap bars={data} />
    </View>
  );
};

export default Page;
