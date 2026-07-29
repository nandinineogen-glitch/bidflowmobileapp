import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import utils from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Eye, EyeOff } from 'lucide-react-native';
import { AuthContext } from '../../context/AuthContext';

const RegisterScreen = ({ navigation }) => {
  const { role, setIsLoggedIn } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
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
      style={{ backgroundColor: utils.colors.white }}
    >
      <ScrollView className="p-10">
        <View
          className="mt-2"
          style={{ backgroundColor: utils.colors.white }}
        >
          <View className="mt-12">
            <utils.components.Header label="Create Account" />
          </View>

          <Text
            className="text-lg mt-2 mb-10 font-bold"
            style={{ color: utils.colors.grey }}
          >
            Sign up to get started!
          </Text>

          <Text
            className="text-lg mb-2"
            style={{ color: utils.colors.black }}
          >
            Full Name
          </Text>

          <View
            className="border rounded-xl px-4"
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <TextInput
              placeholder="Enter your name"
              className="h-14"
              style={{ color: utils.colors.black }}
            />
          </View>

          <Text
            className="text-lg mb-2 mt-6"
            style={{ color: utils.colors.black }}
          >
            Email
          </Text>

          <View
            className="border rounded-xl px-4"
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <TextInput
              placeholder="Enter your email"
              className="h-14"
              style={{ color: utils.colors.black }}
            />
          </View>

          <Text
            className="text-lg mt-6 mb-2"
            style={{ color: utils.colors.black }}
          >
            Phone Number
          </Text>

          <View
            className="border rounded-xl px-4"
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <TextInput
              placeholder="Enter your phone number"
              className="h-14"
              keyboardType="numeric"
              maxLength={10}
              style={{ color: utils.colors.black }}
            />
          </View>

          <Text
            className="text-lg mt-6 mb-2"
            style={{ color: utils.colors.black }}
          >
            Password
          </Text>

          <View
            className="border rounded-xl px-4 flex-row items-center"
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <TextInput
              placeholder="Enter your Password"
              className="h-14 flex-1"
              secureTextEntry={!showPassword}
              style={{ color: utils.colors.black }}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
            >
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
            className="rounded-xl py-4 mt-8"
            style={{ backgroundColor: utils.colors.theme_color }}
            onPress={handleSignUp}
          >
            <Text
              className="text-center text-lg font-bold"
              style={{ color: utils.colors.white }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-6">
            <Text style={{ color: utils.colors.black }}>
              Already have an account?
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
            >
              <Text
                className="font-bold"
                style={{ color: utils.colors.theme_color }}
              >
                {' '}Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;