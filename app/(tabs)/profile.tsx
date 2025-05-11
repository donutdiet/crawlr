import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { defaultStyles } from "@/constants/Styles";

const Page = () => {
  const router = useRouter();

  return (
    <View style={[defaultStyles.container, { padding: 26 }]}>
      <TouchableOpacity
        style={defaultStyles.btn}
        onPress={() => router.push("/(modals)/login")}
      >
        <Text style={defaultStyles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;
