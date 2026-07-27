import React , {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import OnBoardingScreen from '../screens/auth/OnBoardingScreen';
import RoleSelectionScreen from '../screens/auth/RoleSelectionScreen';
import CompleteProfileScreen from '../screens/seller/CompleteProfileScreen';
import BuyerHomeScreen from '../screens/buyer/BuyerHomeScreen';
import SellerBottomTabNavigator from './SellerBottomTabNavigator';
import SellerNavigation from './SellerNavigation';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isLoggedIn, profileCompleted,role } = useContext(AuthContext);
  return (
    <NavigationContainer>
    <Stack.Navigator>
      {!isLoggedIn ? ( 
        <>
        <Stack.Screen name="Onboarding" component={OnBoardingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Roleselection" component={RoleSelectionScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options={{ headerShown: false}} />
      </>) : role === 'seller' ? (
        profileCompleted ?(
          <Stack.Screen name="SellerBottomTab" component={SellerBottomTabNavigator} options={{ headerShown: false}} />
        ): (
           <Stack.Screen name="SellerNavigation" component={SellerNavigation} options={{ headerShown: false}} />
        )
      ) :
      (
        <Stack.Screen name="BuyerHome" component={BuyerHomeScreen} options={{ headerShown: false }}/>
      )
      } 
     
    </Stack.Navigator>
    </NavigationContainer>
  );
}
