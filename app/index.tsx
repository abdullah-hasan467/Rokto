import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-[#C62C2C]">
      <TouchableOpacity onLongPress={() => router.push("/(tabs)/Home")}>
        <View className="bg-white p-4 rounded-lg shadow-lg">
          <Text className="text-xl text-red-500"> Go to Home Page </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
