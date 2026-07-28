import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils'; 


export default function AuctionSettings({ navigation }) {
    const handleSave = () => {
    navigation.navigate('ShippingandReturns');
  };
 
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
       
    <View style={{ backgroundColor: utils.colors.white }} className="mx-8">
      
     
      <View className="flex-row items-center justify-between pt-6 pb-4">
        <View>
        
          <Text className="text-3xl font-bold mt-0.5" style={{ color: utils.colors.black }}>
            Auction Settings
          </Text>
          <View className='w-44'>
          <Text className="text mt-0.5" style={{ color: utils.colors.black }}>
            Set how you want to sell your product
          </Text>
          </View>
          <Text className="text-xl font-bold mt-10" style={{ color: utils.colors.black }}>
            Auction Type
          </Text>
        </View>
      </View>  
       <View className="flex-row justify-between">
             
              <TouchableOpacity className="border rounded-xl items-center flex-1 py-4 px-5 mx-2" style={{ borderColor: utils.colors.lightGrey }}>
               <Text style={{ color: utils.colors.gray }} className="text-center">Live Auction</Text>
              </TouchableOpacity>
              
              
              <TouchableOpacity className="border rounded-xl items-center flex-1 py-4 px-5 mx-2"  style={{ borderColor: utils.colors.lightGrey }} >
                <Text style={{ color: utils.colors.gray }} className="text-center">Reserve Auction</Text>
              </TouchableOpacity>
        </View>  
        <Text
            className="text-lg mb-2 mt-8 font-bold"
            style={{ color: utils.colors.black }}
          >
            Starting Price 
          </Text>

          <View
            className="border rounded-xl px-4 "
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <TextInput
              placeholder=""
              className="h-14"
              style={{ color: utils.colors.black }}
            />
          </View>

          <Text
            className="text-lg mb-2 mt-6 font-bold"
            style={{ color: utils.colors.black }}
          >
            Reserve Price(Optional)
          </Text>

          <View
            className="border rounded-xl px-4"
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <TextInput
              placeholder=""
              className="h-14"
              style={{ color: utils.colors.black }}
            />
          </View>

          <Text
            className="text-lg mt-6 mb-2 font-bold"
            style={{ color: utils.colors.black }}
          >
            Buy Now Price(Optional)
          </Text>

          <View
            className="border rounded-xl px-4"
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <TextInput
              placeholder=""
              className="h-14"
              keyboardType="numeric"
              maxLength={10}
              style={{ color: utils.colors.black }}
            />
          </View>
          
           <Text
            className="text-lg mt-6 mb-2 font-bold"
            style={{ color: utils.colors.black }}
          >
            Auction Duration
          </Text>

          <View
            className="border rounded-xl px-4"
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <TextInput
              placeholder=""
              className="h-14"
              keyboardType="numeric"
              maxLength={10}
              style={{ color: utils.colors.black }}
            />
          </View>
          <TouchableOpacity className="rounded-xl py-4 mt-10"  onPress={handleSave} style={{ backgroundColor: utils.colors.blue }}>
            <Text className="text-center text-lg font-bold" style={{ color: utils.colors.white }}>Continue</Text>
          </TouchableOpacity>
         </View>    

    </SafeAreaView>
  );
}

