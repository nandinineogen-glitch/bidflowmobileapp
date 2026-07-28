import React  from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import OnBoardingScreen from '../screens/auth/OnBoardingScreen';
import RoleSelectionScreen from '../screens/auth/RoleSelectionScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

const Stack = createNativeStackNavigator();
export default function AuthNavigator() {
    return (
     <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnBoardingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Roleselection" component={RoleSelectionScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options={{ headerShown: false}} />
         
          
           
   </Stack.Navigator>
  );
}
