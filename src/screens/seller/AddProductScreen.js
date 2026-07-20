import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils'; 


export default function AddProductScreen() {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
       
    <View style={{ backgroundColor: utils.colors.white }}>
      
     
      <View className="flex-row items-center justify-between px-5 pt-6 pb-4">
        <View>
        
          <Text className="text-3xl font-bold mt-0.5" style={{ color: utils.colors.black }}>
            What are You Listing?
          </Text>
          <View className='w-44'>
          <Text className="text mt-0.5" style={{ color: utils.colors.black }}>
            Fill in the basic details of your product.
          </Text>
          </View>
        </View>
      </View>    
       <View className="mx-5 my-4 rounded-2xl py-12 border-4 border-dotted  items-center text-center" style={{ backgroundColor: utils.colors.white , borderColor: utils.colors.lightGrey}}>
        
        <View className="flex-row justify-between items-center text-center align-middle">
          <View>
            <Text className="text-xl font-bold" style={{ color: utils.colors.blue }}>Upload Photos</Text>
            <Text className="text" style={{ color: utils.colors.grey }}>Minimum 3 photos</Text>
            <Text className="text" style={{ color: utils.colors.grey }}>+</Text>
          </View>
        </View>
      </View>  
    </View>    
    </SafeAreaView>
  );
}

