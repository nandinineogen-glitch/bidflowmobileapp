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
import {ArrowLeft} from 'lucide-react-native';
import utils from '../../utils';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false}>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="w-10 h-10 rounded-full items-center justify-center mt-5">

            <ArrowLeft
              size={25}
              color={utils.colors.black}
            />

          </TouchableOpacity>

          <View className="mt-16">

            <utils.components.Header label="Forgot Password?" />

            <Text
              className="text-lg mt-2 mb-16 font-bold"
              style={{color: utils.colors.grey}}>
              Enter your phone number to reset password
            </Text>

            <Text
              className="text-lg mb-2"
              style={{color: utils.colors.black}}>
              Phone Number
            </Text>

            <TextInput
              placeholder="Enter Your Phone Number"
              placeholderTextColor={utils.colors.grey}
              keyboardType="phone-pad"
              maxLength={10}
              className="h-14 border rounded-xl px-4"
              style={{
                borderColor: utils.colors.lightGrey,
                color: utils.colors.black,
                fontSize: 16,
              }}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate('OTPScreen')}
              className="rounded-xl h-14 items-center justify-center mt-10"
              style={{
                backgroundColor: utils.colors.theme_color,
              }}>

              <Text
                className="text-lg font-bold"
                style={{color: utils.colors.white}}>
                Send OTP
              </Text>

            </TouchableOpacity>

          </View>
        </ScrollView>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;