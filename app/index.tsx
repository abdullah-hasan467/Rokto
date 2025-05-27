import { router } from "expo-router";
import React from "react";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center px-6">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <TouchableOpacity
        className="bg-[#C62C2C] w-full rounded-xl py-4 mb-4"
        onPress={() => router.push("/auth/Login")}
      >
        <Text className="text-white text-center text-lg font-semibold">
          লগইন করুন
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="border border-[#C62C2C] w-full rounded-xl py-4"
        onPress={() => router.push("/auth/SignIn")}
      >
        <Text className="text-[#C62C2C] text-center text-lg font-semibold">
          একাউন্ট খুলুন
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
