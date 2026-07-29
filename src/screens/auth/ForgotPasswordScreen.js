import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import utils from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: utils.colors.white }}
    >
      <ScrollView className="p-10">
        <View
          className="mt-28"
          style={{ backgroundColor: utils.colors.white }}
        >
          <utils.components.Header label="Forgot Password?" />

          <Text
            className="text-lg mt-2 mb-20 font-bold"
            style={{ color: utils.colors.grey }}
          >
            Enter your phone number to reset password
          </Text>

          <Text
            className="text-lg mb-2"
            style={{ color: utils.colors.black }}
          >
            Phone Number
          </Text>

          <View
            className="border rounded-xl px-4"
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <TextInput
              placeholder="Enter Your Phone Number"
              className="h-14"
              keyboardType="numeric"
              maxLength={10}
              style={{ color: utils.colors.black }}
            />
          </View>

          <TouchableOpacity
            className="rounded-xl py-4 mb-4 mt-10"
            style={{ backgroundColor: utils.colors.theme_color }}
          >
            <Text
              className="text-center text-lg font-bold"
              style={{ color: utils.colors.white }}
            >
              Send OTP
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;