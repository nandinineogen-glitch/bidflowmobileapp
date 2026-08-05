import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import utils from '../../utils'; 
import {ChevronRight} from 'lucide-react-native';



export default function EarningScreen() {


  return (
 
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
       
    <View style={{ backgroundColor: utils.colors.white }}>
      
     
      <View className="flex-row items-center justify-between px-5 pt-6 pb-4">
        <View>
          <Text className="text-3xl font-bold mt-0.5" style={{ color: utils.colors.black }}>
            Earnings
          </Text>
          <Text className="text-xl mt-2" style={{ color: utils.colors.grey }}>
            Overview of your total earnings.
          </Text>
        </View>
        
      </View>

      
      <View className="mx-5 my-3 py-10 pt-7 pb-16 rounded-2xl p-5" style={{ backgroundColor: utils.colors.theme_color }}>
        
        <View className="flex-row justify-between items-start">
          <View>
            <Text className="text-xl font-bold" style={{ color: utils.colors.white }}>Total Earnings</Text>
            <Text className="text-3xl font-bold mt-1.5" style={{ color: utils.colors.white }}>₹1,24,560</Text>
          </View>
          <View className="h-7 w-7 rounded-full border items-center justify-center mt-1" style={{ borderColor: utils.colors.white }}>
            <View className="h-2 w-2 rounded-full" style={{ backgroundColor: utils.colors.white }}/>
          </View>
        </View>
      </View>

      
    

     
      <View className="flex-row items-center justify-between mt-2 ml-2 mr-7 mb-4">
      
      <Text style={{ color: utils.colors.black }} className="text-xl px-5 pt-5 pb-2">
        This Months
      </Text>
      
      <Text style={{ color: utils.colors.gray }} className="font-bold text-xl">
        ₹85,420
      </Text>
      </View>

     <View
              style={{
                height: 1,
                backgroundColor: utils.colors.lightGrey,
              }}
              className='w-400'
            />

     <View className="flex-row items-center justify-between mt-2 ml-2 mr-7 mb-4">
      
      <Text style={{ color: utils.colors.black }} className="text-xl px-5 pt-5 pb-2">
        Last Months
      </Text>
      
      <Text style={{ color: utils.colors.gray }} className="font-bold text-xl">
        ₹66,240
      </Text>
      </View>
      <View
              style={{
                height: 1,
                backgroundColor: utils.colors.lightGrey,
              }}
              className='w-400'
            />

<View className="flex-row items-center justify-between mt-2 ml-2 mr-7 mb-4">
      
      <Text style={{ color: utils.colors.black }} className="text-xl px-5 pt-5 pb-2">
        Total orders
      </Text>
      
      <Text style={{ color: utils.colors.gray }} className="font-bold text-xl">
        36
      </Text>
      </View>
      <View
              style={{
                height: 1,
                backgroundColor: utils.colors.lightGrey,
              }}
              className='w-400'
            />

            <View className="flex-row items-center justify-between mt-2 ml-2 mr-7 mb-4">
      
      <Text style={{ color: utils.colors.black }} className="text-xl px-5 pt-5 pb-2">
        Completed Orders
      </Text>
      
      <Text style={{ color: utils.colors.gray }} className="font-bold text-xl">
        28
      </Text>
      </View>
      <View
              style={{
                height: 1,
                backgroundColor: utils.colors.lightGrey,
              }}
              className='w-400'
            />
            <View className='flex-row items-center justify-between mr-8'>
              <View>
            <Text
              className="text-lg font-bold mt-10 ml-7"
              style={{color: utils.colors.theme_color}}>
              View Payout History
            </Text>
            </View>
            <View  className='mt-10' >
            <ChevronRight size={22} color={utils.colors.theme_color}/>
            </View>
            </View>
    </View>
      
    
    </SafeAreaView>
   
  );
}

