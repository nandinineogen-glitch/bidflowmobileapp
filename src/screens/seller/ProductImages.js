import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils'; 


export default function ProductImages({ navigation }) {
   const handleSave = () => {
    navigation.navigate('AuctionSettings');
  };
 
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
       
    <View style={{ backgroundColor: utils.colors.white }} className="mx-8">
      
     
      <View className="flex-row items-center justify-between pt-6 pb-4">
        <View>
        
          <Text className="text-3xl font-bold mt-0.5" style={{ color: utils.colors.black }}>
            Product Images
          </Text>
          <View className='w-44'>
          <Text className="text mt-0.5" style={{ color: utils.colors.black }}>
            Add high quality images from different angles
          </Text>
          </View>
        </View>
      </View>    
      <View className="flex-row justify-between">
       
       
          <Image className="border rounded-xl items-center flex-1 py-28 mx-3"
                     source={utils.assets.buyer}
                      style={{
                        width: 150,
                        height: 160,
                      }}/>
      
        
        
        <Image className="border rounded-xl items-center flex-1 py-28 mx-3"
                     source={utils.assets.buyer}
                      style={{
                        width: 150,
                        height: 160,
                      }}/>
        </View>

         <View className="flex-row justify-between px-2 py-4">
       
        <View className="border rounded-xl items-center flex-1 py-20 px-1 mx-3" style={{ borderColor: utils.colors.lightGrey }}>
          
        </View>
        
        
         <View className="border-4 border-dotted rounded-xl items-center flex-1 py-20 mx-3" style={{ borderColor: utils.colors.lightGrey }}>
            <Text className="text-6xl ml-2 mt-4" style={{ color: utils.colors.blue }}>+</Text>
            
        </View>
        </View>

         <TouchableOpacity onPress={handleSave} className="rounded-xl py-4 mb-4 mt-28" style={{ backgroundColor: utils.colors.theme_color }}>
            <Text className="text-center text-lg font-bold" style={{ color: utils.colors.white }}>Continue</Text>
          </TouchableOpacity>
    </View>    

    </SafeAreaView>
  );
}

