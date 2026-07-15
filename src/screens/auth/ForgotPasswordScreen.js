import React from 'react';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import utils from '../../utils';
import { Eye } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const ForgotPasswordScreen = () => {
  return (
      <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white}} >
      <ScrollView className="p-10">
        < View className="mt-28" style={{ backgroundColor: utils.colors.white }}>
          
            <utils.components.Header label=" Forgot Password?" /> 
          <Text className="text-lg  mt-2 mb-20 font-bold" style={{ color: utils.colors.grey }}>
            Enter your phone number to reset password
          </Text>

        <Text className="text-lg mb-2" style={{ color: utils.colors.black }}>
            Phone Number
          </Text>
          <View className="border rounded-xl px-4 flex-row items-center" style={{ borderColor: utils.colors.lightGrey }}>

            <TextInput
              placeholder="Enter Your Phone Number"
              className='h-14 flex-1'
              secureTextEntry={true}
              keyboardType="numeric"
               maxLength={10}
            >

            </TextInput>
            <Eye size={20} />
          </View>

         
          <TouchableOpacity className="rounded-xl py-4 mb-4 mt-10" style={{ backgroundColor: utils.colors.blue }}>
            <Text className="text-center text-lg font-bold" style={{ color: utils.colors.white }}>Send OTP</Text>
          </TouchableOpacity>
        </View>
       </ScrollView>
      </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
