import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import OnBoardingScreen from '../screens/auth/OnBoardingScreen';
import RoleSelectionScreen from '../screens/auth/RoleSelectionScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import OTPScreen from '../screens/auth/OTPScreen';
const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnBoardingScreen}
      />

      <Stack.Screen
        name="Roleselection"
        component={RoleSelectionScreen}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
      />

      <Stack.Screen
        name="Forgot"
        component={ForgotPasswordScreen}
      />

      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
      />

       <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
}