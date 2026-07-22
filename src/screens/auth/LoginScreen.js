import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import utils from '../../utils';
import { Eye } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const { role, setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = () => {
    setIsLoggedIn(true);

    if (role === 'seller') {
      navigation.replace('CompleteProfile');
    } else {
      navigation.replace('BuyerHome');
    }
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
      <ScrollView className="p-10">
        <View className="mt-28" style={{ backgroundColor: utils.colors.white }}>
          <utils.components.Header label="Welcome Back!" />

          <Text
            className="text-lg mt-2 mb-10 font-bold"
            style={{ color: utils.colors.grey }}
          >
            Login to continue
          </Text>

          <Text
            className="text-lg mb-2"
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
              className="h-14" style={{ color: utils.colors.black }}
            />
          </View>

          <Text
            className="text-lg mt-10 mb-2"
            style={{ color: utils.colors.black }}
          >
            Password
          </Text>

          <View
            className="border rounded-xl px-4 flex-row items-center"
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <TextInput
              placeholder="Enter your password"
              className="h-14 flex-1"
              secureTextEntry={true}
              style={{ color: utils.colors.black }}
            />

            <Eye
              size={20}
              style={{ color: utils.colors.grey }}
            />
          </View>

          <TouchableOpacity
            className="items-end mt-7 mb-10"
            onPress={() => navigation.navigate('Forgot')}
          >
            <Text
              className="font-bold"
              style={{ color: utils.colors.blue }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="rounded-xl py-4 mb-4"
            style={{ backgroundColor: utils.colors.blue }}
            onPress={handleLogin}
          >
            <Text
              className="text-center text-lg font-bold"
              style={{ color: utils.colors.white }}
            >
              Login
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-7">
            <Text style={{ color: utils.colors.black }}>
              Don't have an account?
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
            >
              <Text
                className="font-bold"
                style={{ color: utils.colors.blue }}
              >
                {' '}Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;