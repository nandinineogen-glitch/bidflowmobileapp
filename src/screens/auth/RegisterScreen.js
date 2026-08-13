import React, {useContext, useState} from 'react';
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
import {AuthContext} from '../../context/AuthContext';

const RegisterScreen = ({navigation}) => {
  const {role, setIsLoggedIn} = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const signUp = () => {
    setIsLoggedIn(true);

    if (role === 'seller') {
      navigation.replace('CompleteProfile');
    } else {
      navigation.replace('BuyerHome');
    }
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{
        backgroundColor: utils.colors.white,
      }}>

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

          <View className="mt-12">

            <utils.components.Header label="Create Account" />

            <Text
              className="text-lg mt-2 mb-10 font-bold"
              style={{
                color: utils.colors.grey,
              }}>
              Sign up to get started!
            </Text>

            <Text
              className="text-lg mb-2"
              style={{
                color: utils.colors.black,
              }}>
              Full Name
            </Text>

            <TextInput
              placeholder="Enter your name"
              placeholderTextColor={utils.colors.grey}
              className="h-14 border rounded-xl px-4"
              style={{
                borderColor: utils.colors.lightGrey,
                color: utils.colors.black,
              }}
            />

            <Text
              className="text-lg mt-6 mb-2"
              style={{
                color: utils.colors.black,
              }}>
              Email
            </Text>

            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={utils.colors.grey}
              keyboardType="email-address"
              autoCapitalize="none"
              className="h-14 border rounded-xl px-4"
              style={{
                borderColor: utils.colors.lightGrey,
                color: utils.colors.black,
              }}
            />

            <Text
              className="text-lg mt-6 mb-2"
              style={{
                color: utils.colors.black,
              }}>
              Phone Number
            </Text>

            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor={utils.colors.grey}
              keyboardType="phone-pad"
              maxLength={10}
              className="h-14 border rounded-xl px-4"
              style={{
                borderColor: utils.colors.lightGrey,
                color: utils.colors.black,
              }}
            />

            <Text
              className="text-lg mt-6 mb-2"
              style={{
                color: utils.colors.black,
              }}>
              Password
            </Text>

            <View
              className="h-14 border rounded-xl px-4 flex-row items-center"
              style={{
                borderColor: utils.colors.lightGrey,
              }}>

              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={utils.colors.grey}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                className="flex-1"
                style={{
                  color: utils.colors.black,
                }}
              />

              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="w-10 h-10 items-center justify-center">

                {showPassword ? (
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
              onPress={signUp}
              className="h-14 rounded-xl items-center justify-center mt-8"
              style={{
                backgroundColor: utils.colors.theme_color,
              }}>

              <Text
                className="text-lg font-bold"
                style={{
                  color: utils.colors.white,
                }}>
                Sign Up
              </Text>

            </TouchableOpacity>

            <View className="flex-row justify-center mt-6">

              <Text
                style={{
                  color: utils.colors.black,
                }}>
                Already have an account?
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}>

                <Text
                  className="font-bold"
                  style={{
                    color: utils.colors.theme_color,
                  }}>
                  {' '}Login
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default RegisterScreen;