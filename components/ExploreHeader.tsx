import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/constants/Colors";

const ExploreHeader = () => {
  return (
    <SafeAreaView style={{ paddingTop: 8 }}>
      <View style={styles.actionRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} />
          <TextInput style={styles.inputField} placeholder="Search" />
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="options-outline" size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.dark,
    borderRadius: 24,
  },
  inputField: {
    flex: 1,
    paddingLeft: 8,
    fontSize: 16,
  },
  filterBtn: {
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.dark,
    borderRadius: 24,
  },
});
