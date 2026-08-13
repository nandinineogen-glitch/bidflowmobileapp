
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Eye, EyeOff} from 'lucide-react-native';
import utils from '../../utils';

const ResetPasswordScreen = () => {
  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <SafeAreaView
      className="flex-1"
      style={{
        backgroundColor: utils.colors.white,
      }}>

      <KeyboardAvoidingView
        className="flex-1"
        behavior={
          Platform.OS === 'ios' ? 'padding' : undefined
        }>

        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false}>

          <View className="mt-28">

            <utils.components.Header label="Reset Password" />

            <Text
              className="text-lg mt-2 mb-10 font-bold"
              style={{
                color: utils.colors.grey,
              }}>
              Create a new password for your account
            </Text>

            <Text
              className="text-lg mb-2"
              style={{
                color: utils.colors.black,
              }}>
              Current Password
            </Text>

            <View
              className="h-14 border rounded-xl px-4 flex-row items-center"
              style={{
                borderColor: utils.colors.lightGrey,
              }}>

              <TextInput
                placeholder="Your Current Password"
                placeholderTextColor={utils.colors.grey}
                secureTextEntry={!showCurrentPassword}
                className="flex-1"
                style={{
                  color: utils.colors.black,
                }}
              />

              <TouchableOpacity
                onPress={() =>
                  setShowCurrentPassword(
                    !showCurrentPassword,
                  )
                }
                activeOpacity={0.7}
                className="w-10 h-10 items-center justify-center">

                {showCurrentPassword ? (
                  <Eye
                    size={20}
                    color={utils.colors.grey}
                  />
                ) : (
                  <EyeOff
                    size={20}
                    color={utils.colors.grey}
                  />
                )}

              </TouchableOpacity>

            </View>

            <Text
              className="text-lg mt-8 mb-2"
              style={{
                color: utils.colors.black,
              }}>
              New Password
            </Text>

            <View
              className="h-14 border rounded-xl px-4 flex-row items-center"
              style={{
                borderColor: utils.colors.lightGrey,
              }}>

              <TextInput
                placeholder="Enter New Password"
                placeholderTextColor={utils.colors.grey}
                secureTextEntry={!showNewPassword}
                className="flex-1"
                style={{
                  color: utils.colors.black,
                }}
              />

              <TouchableOpacity
                onPress={() =>
                  setShowNewPassword(!showNewPassword)
                }
                activeOpacity={0.7}
                className="w-10 h-10 items-center justify-center">

                {showNewPassword ? (
                  <Eye
                    size={20}
                    color={utils.colors.grey}
                  />
                ) : (
                  <EyeOff
                    size={20}
                    color={utils.colors.grey}
                  />
                )}

              </TouchableOpacity>

            </View>

            <Text
              className="text-lg mt-8 mb-2"
              style={{
                color: utils.colors.black,
              }}>
              Confirm Password
            </Text>

            <View
              className="h-14 border rounded-xl px-4 flex-row items-center"
              style={{
                borderColor: utils.colors.lightGrey,
              }}>

              <TextInput
                placeholder="Confirm Your Password"
                placeholderTextColor={utils.colors.grey}
                secureTextEntry={!showConfirmPassword}
                className="flex-1"
                style={{
                  color: utils.colors.black,
                }}
              />

              <TouchableOpacity
                onPress={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword,
                  )
                }
                activeOpacity={0.7}
                className="w-10 h-10 items-center justify-center">

                {showConfirmPassword ? (
                  <Eye
                    size={20}
                    color={utils.colors.grey}
                  />
                ) : (
                  <EyeOff
                    size={20}
                    color={utils.colors.grey}
                  />
                )}

              </TouchableOpacity>

            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              className="h-14 rounded-xl items-center justify-center mt-10"
              style={{
                backgroundColor: utils.colors.theme_color,
              }}>

              <Text
                className="text-lg font-bold"
                style={{
                  color: utils.colors.white,
                }}>
                Reset Password
              </Text>

            </TouchableOpacity>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default ResetPasswordScreen;

