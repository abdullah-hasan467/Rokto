import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { bloodGroups, dhakaAreas, districts } from "../../components/SignupData";

export default function SignUp() {
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

  const filteredAreas = (isInsideDhaka ? dhakaAreas : districts).filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-white px-4 pt-4">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView showsVerticalScrollIndicator={false}>
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
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            className="border border-gray-300 rounded-lg p-3 flex-1 ml-2"
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        {/* Email */}
        <TextInput
          className="border border-gray-300 rounded-lg p-3 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Phone Number */}
        <View className="flex-row items-center border border-gray-300 rounded-lg p-3 mb-4">
          <Text className="mr-2">🇧🇩 +880</Text>
          <TextInput
            placeholder="Phone Number"
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
                  className={`py-2 px-4 ${bloodGroup === group ? "bg-[#C62C2C]" : ""}`}
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
            <Text className={`text-[16px] ${isInsideDhaka ? "text-[#C62C2C] font-semibold" : "text-gray-700"}`}>
              ☐ ঢাকা শহরের মধ্যে
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsInsideDhaka(false);
              setSelectedArea("");
            }}
          >
            <Text className={`text-[16px] ${!isInsideDhaka ? "text-[#C62C2C] font-semibold" : "text-gray-700"}`}>
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
              placeholder={isInsideDhaka ? "এলাকা সার্চ করুন..." : "জেলা সার্চ করুন..."}
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
                    className={`py-2 px-4 ${selectedArea === item ? "bg-[#C62C2C]" : ""}`}
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
      </ScrollView>
    </SafeAreaView>
  );
}
