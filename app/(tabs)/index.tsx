import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/filter"}>Filters</Link>
      <Link href={{ pathname: "/bar/[id]", params: { id: "12" } }}>
        Bar 12 details page
      </Link>
    </View>
  );
};

export default Page;
