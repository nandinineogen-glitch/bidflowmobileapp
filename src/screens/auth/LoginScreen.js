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
import utils from '../../utils';
import {Eye, EyeOff, ArrowLeft} from 'lucide-react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const {role, setIsLoggedIn} = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
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
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>

          <View className="pt-5">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              className="w-10 h-10 rounded-full items-center justify-center">
              <ArrowLeft
                size={25}
                color={utils.colors.black}
              />
            </TouchableOpacity>
          </View>

          <View
            className="mt-12"
            style={{backgroundColor: utils.colors.white}}>

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

            <View
              className="border rounded-xl px-4"
              style={{borderColor: utils.colors.lightGrey}}>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={utils.colors.grey}
                className="h-14"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={{
                  color: utils.colors.black,
                  fontSize: 16,
                }}
              />
            </View>

            <Text
              className="text-lg mt-8 mb-2"
              style={{color: utils.colors.black}}>
              Password
            </Text>

            <View
              className="border rounded-xl px-4 flex-row items-center"
              style={{borderColor: utils.colors.lightGrey}}>

              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={utils.colors.grey}
                className="h-14 flex-1"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                style={{
                  color: utils.colors.black,
                  fontSize: 16,
                }}
              />

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowPassword(!showPassword)}
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
              activeOpacity={0.7}
              className="items-end mt-6 mb-10"
              onPress={() => navigation.navigate('Forgot')}>
              <Text
                className="font-bold"
                style={{color: utils.colors.theme_color}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              className="rounded-xl py-4"
              style={{backgroundColor: utils.colors.theme_color}}
              onPress={handleLogin}>
              <Text
                className="text-center text-lg font-bold"
                style={{color: utils.colors.white}}>
                Login
              </Text>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-7">
              <Text style={{color: utils.colors.black}}>
                Don't have an account?
              </Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Register')}>
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