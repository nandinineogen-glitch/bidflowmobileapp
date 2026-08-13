
import React from 'react';
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
import utils from '../../utils';

const OTPScreen = ({navigation}) => {
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

            <View className="items-center">
              <utils.components.Header label="Verify Your Phone" />
            </View>

            <Text
              className="text-lg mt-10 font-bold text-center"
              style={{
                color: utils.colors.grey,
              }}>
              Enter the OTP sent to
            </Text>

            <Text
              className="text-lg mt-2 mb-20 font-bold text-center"
              style={{
                color: utils.colors.grey,
              }}>
              +91 1234567890
            </Text>

            <View className="flex-row justify-between">

              <TextInput
                maxLength={1}
                keyboardType="numeric"
                className="w-12 h-14 border rounded-xl text-center text-xl font-bold"
                style={{
                  borderColor: utils.colors.lightGrey,
                  color: utils.colors.black,
                }}
              />

              <TextInput
                maxLength={1}
                keyboardType="numeric"
                className="w-12 h-14 border rounded-xl text-center text-xl font-bold"
                style={{
                  borderColor: utils.colors.lightGrey,
                  color: utils.colors.black,
                }}
              />

              <TextInput
                maxLength={1}
                keyboardType="numeric"
                className="w-12 h-14 border rounded-xl text-center text-xl font-bold"
                style={{
                  borderColor: utils.colors.lightGrey,
                  color: utils.colors.black,
                }}
              />

              <TextInput
                maxLength={1}
                keyboardType="numeric"
                className="w-12 h-14 border rounded-xl text-center text-xl font-bold"
                style={{
                  borderColor: utils.colors.lightGrey,
                  color: utils.colors.black,
                }}
              />

              <TextInput
                maxLength={1}
                keyboardType="numeric"
                className="w-12 h-14 border rounded-xl text-center text-xl font-bold"
                style={{
                  borderColor: utils.colors.lightGrey,
                  color: utils.colors.black,
                }}
              />

              <TextInput
                maxLength={1}
                keyboardType="numeric"
                className="w-12 h-14 border rounded-xl text-center text-xl font-bold"
                style={{
                  borderColor: utils.colors.lightGrey,
                  color: utils.colors.black,
                }}
              />

            </View>

            <Text
              className="text-lg mt-20 font-bold text-center"
              style={{
                color: utils.colors.grey,
              }}>
              Resend OTP in 00:45
            </Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResetPassword')
              }
              activeOpacity={0.8}
              className="h-14 rounded-xl items-center justify-center mt-28"
              style={{
                backgroundColor: utils.colors.theme_color,
              }}>

              <Text
                className="text-lg font-bold"
                style={{
                  color: utils.colors.white,
                }}>
                Verify
              </Text>

            </TouchableOpacity>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default OTPScreen;

