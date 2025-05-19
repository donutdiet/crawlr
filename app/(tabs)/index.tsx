import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import { defaultStyles } from "@/constants/Styles";
import osuBarsData from "@/data/osu_bars";
import data from "@/data/osu_bars";
import BarMap from "@/components/BarMap";
import BarList from "@/components/BarList";
import { Bar } from "@/types/bar";
import BarItem from "@/components/BarItem";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Page = () => {
  const bars = useMemo(() => osuBarsData as any, []);
  const [selectedBar, setSelectedBar] = useState<Bar | null>(null);

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [50, "45%", "90%"], []);

  const renderItem = useCallback(
    ({ item }: { item: Bar }) => <BarItem bar={item} />,
    []
  );

  return (
    <GestureHandlerRootView style={defaultStyles.container}>
      <Stack.Screen options={{ header: () => <ExploreHeader /> }} />
      {/* <BarList bars={data} /> */}
      <BarMap bars={data} onMarkerSelected={setSelectedBar} />

      {selectedBar && (
        <View style={styles.container}>
          <BarItem bar={selectedBar} />
        </View>
      )}

      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        style={{ paddingHorizontal: 10 }}
      >
        <Text style={styles.bottomSheetHeader}>
          {data.length} Bars Available
        </Text>
        <BottomSheetFlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 10,
    left: 10,
    bottom: 50,
  },
  bottomSheetHeader: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 14,
  },
});
