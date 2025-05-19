import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { memo, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Bar, BarMapProps } from "@/types/bar";
import Colors from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";

const OSU_INITIAL_REGION = {
  latitude: 40.0017, // roughly the Oval
  longitude: -83.0197,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const BarMap = memo(({ bars, onMarkerSelected }: BarMapProps) => {
  const mapRef = useRef<any>(null);

  return (
    <View style={StyleSheet.absoluteFill}>
      {/* API key required for deployment https://docs.expo.dev/versions/latest/sdk/map-view/ */}
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        /* showsUserLocation and showsMyLocationButton not working on Android */
        showsUserLocation
        showsMyLocationButton
        initialRegion={OSU_INITIAL_REGION}
        /* Padding to keep showsMyLocationButton visible above the selectedBar and BottomSheet */
        paddingAdjustmentBehavior="automatic"
        mapPadding={{ top: 0, right: 0, bottom: 150, left: 0 }}
      >
        {bars.map((bar) => (
          <Marker
            key={bar.id}
            coordinate={{
              latitude: bar.latitude,
              longitude: bar.longitude,
            }}
            onPress={() => {
              console.log(bar);
              onMarkerSelected(bar);
            }}
          >
            <TouchableOpacity
              style={styles.marker}
              /* Expand clickable area to try to fix unresponsiveness */
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              {/* Marker clipping issues on Android */}
              {Platform.OS === "ios" && <Feather name="activity" size={18} />}
              <Text style={styles.markerText}>27</Text>
            </TouchableOpacity>
          </Marker>
        ))}
      </MapView>
    </View>
  );
});

export default BarMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  marker: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "#fff",
    shadowColor: Colors.dark,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    borderColor: Colors.gray,
  },
  markerText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
