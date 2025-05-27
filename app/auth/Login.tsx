import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LogIn() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleLogin = () => {
    if (!emailOrPhone || !password) {
      setAlertMessage(" ইমেইল/ফোন এবং পাসওয়ার্ড দিন");
      setShowAlert(true);
      return;
    }

    setAlertMessage("সফলভাবে লগইন হয়েছে!");
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      router.push("/Home");
    }, 1500); // 1.5 sec delay before navigation
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-6 justify-center">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <View className="justify-center items-center mb-5">
        <Image
          source={require("../../assets/images/রক্ত-removebg-preview.png")}
          style={{ width: 250, height: 250 }}
        />
      </View>

      <TextInput
        className="border border-gray-300 rounded-xl p-4 mb-4 text-base"
        placeholder="ইমেইল বা ফোন নম্বর দিন"
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
        keyboardType="email-address"
        placeholderTextColor="#999"
      />

      <TextInput
        className="border border-gray-300 rounded-xl p-4 mb-4 text-base"
        placeholder="পাসওয়ার্ড দিন"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        className="bg-[#C62C2C] rounded-xl py-4 mt-2 mb-4"
        onPress={handleLogin}
      >
        <Text className="text-center text-white font-semibold text-lg">
          লগইন করুন
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert("Reset password flow")}>
        <Text className="text-center text-[#C62C2C]">পাসওয়ার্ড মনে নেই...</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/auth/SignIn")}
        className="mt-6"
      >
        <Text className="text-center text-gray-600 mt-6">
          নতুন একাউন্ট{" "}
          <Text className="text-[#C62C2C] font-semibold">খুলুন</Text>
        </Text>
      </TouchableOpacity>

      {/* ✅ Awesome Alert Component */}
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="সতর্কতা"
        message={alertMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={true}
        showConfirmButton={true}
        confirmText="ঠিক আছে"
        confirmButtonColor="#C62C2C"
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
      />
    </SafeAreaView>
  );
}
