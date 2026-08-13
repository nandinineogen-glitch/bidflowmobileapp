
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
import {Eye, EyeOff, ArrowLeft} from 'lucide-react-native';
import utils from '../../utils';
import {AuthContext} from '../../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const {role, setIsLoggedIn} = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

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
            activeOpacity={0.7}
            className="w-10 h-10 rounded-full items-center justify-center mt-5">

            <ArrowLeft
              size={25}
              color={utils.colors.black}
            />

          </TouchableOpacity>

          <View className="mt-12">

            <utils.components.Header label="Welcome Back!" />

            <Text
              className="text-lg mt-2 mb-10 font-bold"
              style={{color: utils.colors.grey}}>
              Login to continue
            </Text>

            <Text
              className="text-lg mb-2"
              style={{color: utils.colors.black}}>
              Email
            </Text>

            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={utils.colors.grey}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              className="h-14 border rounded-xl px-4"
              style={{
                borderColor: utils.colors.lightGrey,
                color: utils.colors.black,
                fontSize: 16,
              }}
            />

            <Text
              className="text-lg mt-8 mb-2"
              style={{color: utils.colors.black}}>
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
                autoCorrect={false}
                className="flex-1"
                style={{
                  color: utils.colors.black,
                  fontSize: 16,
                }}
              />

              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                activeOpacity={0.7}
                className="w-10 h-10 items-center justify-center">

                {showPassword ? (
                  <Eye
                    size={21}
                    color={utils.colors.grey}
                  />
                ) : (
                  <EyeOff
                    size={21}
                    color={utils.colors.grey}
                  />
                )}

              </TouchableOpacity>

            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Forgot')}
              activeOpacity={0.7}
              className="items-end mt-6 mb-10">

              <Text
                className="font-bold"
                style={{color: utils.colors.theme_color}}>
                Forgot Password?
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              onPress={login}
              activeOpacity={0.8}
              className="h-14 rounded-xl items-center justify-center"
              style={{
                backgroundColor: utils.colors.theme_color,
              }}>

              <Text
                className="text-lg font-bold"
                style={{color: utils.colors.white}}>
                Login
              </Text>

            </TouchableOpacity>

            <View className="flex-row justify-center mt-7">

              <Text style={{color: utils.colors.black}}>
                Don't have an account?
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                activeOpacity={0.7}>

                <Text
                  className="font-bold"
                  style={{color: utils.colors.theme_color}}>
                  {' '}Sign Up
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

