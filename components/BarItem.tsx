import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import { Bar, BarItemProps } from "@/types/bar";
import Colors from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

const BarItem = ({ bar }: BarItemProps) => {
  return (
    <View style={styles.container}>
      {typeof bar.image === "string" ? (
        <Image source={{ uri: bar.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, { backgroundColor: Colors.primary }]} />
      )}

      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{bar.name}</Text>
        <Text style={styles.address}>
          {bar.address} &#183; {bar.price}
        </Text>
        <Text>Vibes: {bar.vibes.map((v) => v.toLowerCase()).join(", ")}</Text>
        <View style={styles.footer}>
          <View style={styles.metric}>
            <Feather name="activity" size={20} />
            <Text>27</Text>
          </View>
          <View style={styles.metric}>
            <Ionicons name="camera-outline" size={20} />
            <Text>9</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BarItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 8,
    borderRadius: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 6,
    paddingBottom: 4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  address: {
    color: Colors.dark,
  },
  footer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: "auto",
    gap: 14,
  },
  metric: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
