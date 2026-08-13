import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils'; 


export default function ProductImages({ navigation }) {
   const handleSave = () => {
    navigation.navigate('AuctionSettings');
  };
 
  return (
   <SafeAreaView
         className="flex-1"
         style={{backgroundColor: utils.colors.white}}>
         <KeyboardAvoidingView
           className="flex-1"
           behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
           <ScrollView
             className="flex-1"
             contentContainerStyle={{
               flexGrow: 1,
               paddingBottom: 30,
             }}
           
             showsVerticalScrollIndicator={false}>
       
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
       
       
          <Image className="rounded-xl items-center flex-1 py-24 mx-3"
                     source={utils.assets.profile}
                      style={{
                      
                        height: 150,
                      }}/>
      
        
        
        <Image className="rounded-xl items-center flex-1 py-24 mx-3"
                     source={utils.assets.profile}
                      style={{
                      
                        height: 160,
                      }}/>
        </View>

         <View className="flex-row justify-between px-2 py-4">
       
        <Image className="rounded-xl items-center flex-1 py-24 mx-3"
                     source={utils.assets.profile}
                      style={{
                      
                        height: 160,
                      }}/>
        
        
         <View className="border-4 border-dotted rounded-xl items-center flex-1 py-15 mx-4" style={{ borderColor: utils.colors.lightGrey }}>
            <Text className="text-6xl ml-1 mt-14" style={{ color: utils.colors.blue }}>+</Text>
            
        </View>
        </View>

         <TouchableOpacity onPress={handleSave} className="rounded-xl py-4 mb-4 mt-44" style={{ backgroundColor: utils.colors.theme_color }}>
            <Text className="text-center text-lg font-bold" style={{ color: utils.colors.white }}>Continue</Text>
          </TouchableOpacity>
    </View>    
    </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

