import { View, Text, FlatList, ListRenderItem, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { defaultStyles } from "@/constants/Styles";
import { Bar, BarListProps } from "@/types/bar";
import BarItem from "./BarItem";

const BarList = ({ bars }: BarListProps) => {
  const listRef = useRef<FlatList>(null);

  const renderBarCard: ListRenderItem<Bar> = ({ item }) => (
    <BarItem bar={item}></BarItem>
  );

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderBarCard}
        ref={listRef}
        data={bars}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BarList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});
