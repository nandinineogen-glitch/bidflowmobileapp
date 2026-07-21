import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options={{ headerShown: false}} />
  
    </Stack.Navigator>
    </NavigationContainer>
  );
}