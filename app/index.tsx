import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";

SplashScreen.preventAutoHideAsync(); // Prevent it from auto-hiding

export default function Index() {
  useEffect(() => {
    const prepare = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Delay for 2.5 seconds
      await SplashScreen.hideAsync(); // Hide splash screen manually
    };
    prepare();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C62C2C",
      }}
    >
      <TouchableOpacity onPress={()=> router.push("/(tabs)/Home")}> 
        <Text> Go to Home Page </Text>
      </TouchableOpacity>
    </View>
  );
}
