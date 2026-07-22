import React from 'react';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import utils from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';
const OTPScreen = () => {
  return (
      <SafeAreaView style={{ backgroundColor: utils.colors.white}} >
      <ScrollView className="p-10">
        < View className="mt-28 justify-center" style={{ backgroundColor: utils.colors.white }}>
          <View className="self-center">
           <utils.components.Header label="Verify Your Phone" /> 
          </View> 
          <Text className="text-lg  mt-10 font-bold text-center" style={{ color: utils.colors.grey }}>
            Enter the OTP sent to 
          </Text>
          <Text className="text-lg  mt-2 mb-20 font-bold text-center" style={{ color: utils.colors.grey }}>
            +91 1234567890
          </Text>

         <View className="flex-row justify-between mt-2">
          <TextInput
            maxLength={1}
            keyboardType='numeric'
            className="w-12 h-14 border border-gray-300 rounded-xl text-center text-xl font-bold"
            style={{ color: utils.colors.black }}
            />
             <TextInput
            maxLength={1}
            keyboardType='numeric'
            className="w-12 h-14 border border-gray-300 rounded-xl text-center text-xl font-bold"
            style={{ color: utils.colors.black }}
            />
             <TextInput
            maxLength={1}
            keyboardType='numeric'
            className="w-12 h-14 border border-gray-300 rounded-xl text-center text-xl font-bold"
            style={{ color: utils.colors.black }}
            />
             <TextInput
            maxLength={1}
            keyboardType='numeric'
            className="w-12 h-14 border border-gray-300 rounded-xl text-center text-xl font-bold"
            style={{ color: utils.colors.black }}
            />
             <TextInput
            maxLength={1}
            keyboardType='numeric'
            className="w-12 h-14 border border-gray-300 rounded-xl text-center text-xl font-bold"
            style={{ color: utils.colors.black }}
            />
             <TextInput
            maxLength={1}
            keyboardType='numeric'
            className="w-12 h-14 border border-gray-300 rounded-xl text-center text-xl font-bold"
            style={{ color: utils.colors.black }}
            />


            </View>

          <Text className="text-lg  mt-20 font-bold text-center" style={{ color: utils.colors.grey }}>
            Resend OTP in 00:45
          </Text>
          <TouchableOpacity className="rounded-xl py-4 mb-4 mt-28" style={{ backgroundColor: utils.colors.blue }}>
            <Text className="text-center text-lg font-bold" style={{ color: utils.colors.white }}>Verify</Text>
          </TouchableOpacity>
        </View>
       </ScrollView>
      </SafeAreaView>
  );
};

export default OTPScreen;
