import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils'; 


export default function ProductPreview({ navigation }) {
   
 
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
       
    <View style={{ backgroundColor: utils.colors.white }} className="mx-8">
      
        
      <View className="flex-row items-center justify-between pt-6 pb-4">
        <View>
        
          <Text className="text-3xl font-bold mt-0.5" style={{ color: utils.colors.black }}>
            Preview Your Listing
          </Text>
          <View className='w-52'>
          <Text className="text mt-0.5" style={{ color: utils.colors.black }}>
            Review your product details before publishing.
          </Text>
          </View>
         
        </View>
      </View>  
       
         </View>    

    </SafeAreaView>
  );
}

