import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  bloodGroups,
  dhakaAreas,
  districts,
} from "../../components/SignupData";

export default function SignUp({ navigation }: { navigation: any }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [isInsideDhaka, setIsInsideDhaka] = useState(true);
  const [selectedArea, setSelectedArea] = useState("");
  const [searchText, setSearchText] = useState("");
  const [showAreaDropdown, setShowAreaDropdown] = useState(false);
  const [showBloodDropdown, setShowBloodDropdown] = useState(false);

  const filteredAreas = (isInsideDhaka ? dhakaAreas : districts).filter(
    (item) => item.toLowerCase().includes(searchText.toLowerCase())
  );

  // const validateAndSubmit = () => {
  //   if (!firstName.trim()) {
  //     Alert.alert("Error", "Please enter your first name.");
  //     return;
  //   }
  //   if (!lastName.trim()) {
  //     Alert.alert("Error", "Please enter your last name.");
  //     return;
  //   }
  //   if (!email.trim()) {
  //     Alert.alert("Error", "Please enter your email.");
  //     return;
  //   }
  //   // simple email regex
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     Alert.alert("Error", "Please enter a valid email.");
  //     return;
  //   }
  //   if (phone.length !== 10) {
  //     Alert.alert("Error", "Please enter a valid 10-digit phone number.");
  //     return;
  //   }
  //   if (!bloodGroup) {
  //     Alert.alert("Error", "Please select your blood group.");
  //     return;
  //   }
  //   if (!selectedArea) {
  //     Alert.alert("Error", "Please select your area or district.");
  //     return;
  //   }

  //   // If all validations pass, navigate to Home screen
  //   navigation.navigate("../(tabs)/Home", );
  // };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            className="px-4 pt-4"
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Logo */}
            <View className="items-center mb-5">
              <Image
                source={require("../../assets/images/রক্ত-removebg-preview.png")}
                style={{ width: 120, height: 120 }}
              />
            </View>

            {/* Name Fields */}
            <View className="flex-row justify-between mb-4">
              <TextInput
                className="border border-gray-300 rounded-lg p-3 flex-1 mr-2"
                placeholder="নামের প্রথম অংশ"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                className="border border-gray-300 rounded-lg p-3 flex-1 ml-2"
                placeholder="নামের শেষ অংশ"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>

            {/* Email */}
            <TextInput
              className="border border-gray-300 rounded-lg p-3 mb-4"
              placeholder="আপনার ইমেইল দিন"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            {/* Phone Number */}
            <View className="flex-row items-center border border-gray-300 rounded-lg p-3 mb-4">
              <Text className="mr-2">🇧🇩 +880</Text>
              <TextInput
                placeholder="মোবাইল নম্বর"
                keyboardType="number-pad"
                className="flex-1"
                value={phone}
                onChangeText={setPhone}
                maxLength={10}
              />
            </View>

            {/* Blood Group Dropdown */}
            <Text className="mb-1 font-medium text-[16px]">রক্তের গ্রুপ</Text>
            <TouchableOpacity
              onPress={() => setShowBloodDropdown(!showBloodDropdown)}
              className="border border-gray-300 rounded-lg p-3 mb-2 bg-white"
            >
              <Text className="text-gray-700">
                {bloodGroup ? bloodGroup : "রক্তের গ্রুপ বাছাই করুন"}
              </Text>
            </TouchableOpacity>

            {showBloodDropdown && (
              <View className="border border-gray-300 rounded-lg mb-4 bg-white max-h-48">
                <ScrollView>
                  {bloodGroups.map((group) => (
                    <TouchableOpacity
                      key={group}
                      onPress={() => {
                        setBloodGroup(group);
                        setShowBloodDropdown(false);
                      }}
                      className={`py-2 px-4 ${
                        bloodGroup === group ? "bg-[#C62C2C]" : ""
                      }`}
                    >
                      <Text
                        className={`text-base ${
                          bloodGroup === group
                            ? "text-white font-semibold text-center"
                            : "text-gray-700"
                        }`}
                      >
                        {group}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}

            {/* Area/Location Selector */}
            <Text className="mb-1 font-medium text-[16px]">ঠিকানা</Text>
            <View className="flex-row mb-2">
              <TouchableOpacity
                className="mr-4"
                onPress={() => {
                  setIsInsideDhaka(true);
                  setSelectedArea("");
                }}
              >
                <Text
                  className={`text-[16px] ${
                    isInsideDhaka
                      ? "text-[#C62C2C] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  ☐ ঢাকা শহরের মধ্যে
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsInsideDhaka(false);
                  setSelectedArea("");
                }}
              >
                <Text
                  className={`text-[16px] ${
                    !isInsideDhaka
                      ? "text-[#C62C2C] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  ☐ ঢাকা শহরের বাইরে
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => setShowAreaDropdown(!showAreaDropdown)}
              className="border border-gray-300 rounded-lg p-3 mb-2 bg-white"
            >
              <Text className="text-gray-700">
                {selectedArea
                  ? selectedArea
                  : isInsideDhaka
                  ? "এলাকা নির্বাচন করুন"
                  : "জেলা নির্বাচন করুন"}
              </Text>
            </TouchableOpacity>

            {showAreaDropdown && (
              <>
                <TextInput
                  placeholder={
                    isInsideDhaka ? "এলাকা সার্চ করুন..." : "জেলা সার্চ করুন..."
                  }
                  className="border border-gray-300 rounded-lg p-3 mb-2"
                  value={searchText}
                  onChangeText={setSearchText}
                />
                <View className="border border-gray-300 rounded-lg mb-4 bg-white max-h-48">
                  <ScrollView>
                    {filteredAreas.map((item) => (
                      <TouchableOpacity
                        key={item}
                        onPress={() => {
                          setSelectedArea(item);
                          setShowAreaDropdown(false);
                          setSearchText("");
                        }}
                        className={`py-2 px-4 ${
                          selectedArea === item ? "bg-[#C62C2C]" : ""
                        }`}
                      >
                        <Text
                          className={`${
                            selectedArea === item
                              ? "text-white font-semibold"
                              : "text-gray-800"
                          }`}
                        >
                          {item}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </>
            )}

            {/* Done Button */}
            <TouchableOpacity
              onPress={() => router.replace("/(tabs)/Home")}
              className="bg-[#C62C2C] rounded-lg py-3 mb-8 mt-4"
            >
              <Text className="text-white text-center font-semibold text-lg">
                সম্পন্ন করুন
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
