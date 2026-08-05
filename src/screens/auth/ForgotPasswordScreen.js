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
import utils from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowLeft} from 'lucide-react-native';

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
            flexGrow: 1,
            paddingHorizontal: 24,
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false}>
          
          <View className="pt-5">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
              className="w-10 h-10 rounded-full items-center justify-center">
              <ArrowLeft
                size={25}
                color={utils.colors.black}
              />
            </TouchableOpacity>
          </View>

          <View
            className="mt-16"
            style={{backgroundColor: utils.colors.white}}>
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

            <View
              className="border rounded-xl px-4"
              style={{borderColor: utils.colors.lightGrey}}>
              <TextInput
                placeholder="Enter Your Phone Number"
                placeholderTextColor={utils.colors.grey}
                className="h-14"
                keyboardType="phone-pad"
                maxLength={10}
                style={{
                  color: utils.colors.black,
                  fontSize: 16,
                }}
              />
            </View>

            <TouchableOpacity
              className="rounded-xl py-4 mt-10"
              activeOpacity={0.8}
              style={{backgroundColor: utils.colors.theme_color}}>
              <Text
                className="text-center text-lg font-bold"
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