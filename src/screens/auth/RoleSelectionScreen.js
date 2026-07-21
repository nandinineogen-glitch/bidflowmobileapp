import React from 'react';
import { View, ScrollView,Image,Text,TouchableOpacity } from 'react-native';
import utils from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';

const RoleSelectionScreen = () => {
  return (
      <SafeAreaView style={{ backgroundColor: utils.colors.white}}>
      <ScrollView className="p-10">
        < View className="mt-6 justify-center">
            <View className="self-center" style={{ backgroundColor: utils.colors.white }}>
               <Image source={utils.assets.trade} style={{ width: 200, height: 200 }} />
               
            </View>
            <View className="self-center mt-8">
                <utils.components.Header label="Select Your Role" />
                
            </View>
              <View className="self-center mt-8">
               <Text className="mt-2 mb-10 px-7" style={{ color: utils.colors.grey }}>
             Select <Text className="font-bold" style={{ color: utils.colors.black }}>Buyer</Text> if you want to bid and purchase products or <Text className="font-bold" style={{ color: utils.colors.black }}>Seller</Text> if you want to list products and create auctions.
              </Text>
              </View>
              <View className="flex-row justify-between mt-2">
                        <View className="w-40 h-44 border border-gray-300 rounded-xl self-center text-xl font-bold" >
                            <Image source={utils.assets.buyer}  className="self-center mt-5 w-24 h-24" />
                            <Text className="self-center mt-5 text-lg font-bold" style={{ color: utils.colors.black }}>Buyer</Text>
                            </View>
                             <View className="w-40 h-44 border border-gray-300 rounded-xl self-center text-xl font-bold" >
                            <Image source={utils.assets.seller}  className="self-center mt-5 w-24 h-24" />
                            <Text className="self-center mt-5 text-lg font-bold" style={{ color: utils.colors.black }}>Seller</Text>
                            </View>
                            </View>


                           <TouchableOpacity className="rounded-xl py-2 mt-14" style={{ backgroundColor: utils.colors.blue }}>
                                <Text className="text-center text-lg font-bold" style={{ color: utils.colors.white }}>Get Started</Text>
                          </TouchableOpacity>
                          
        </View>
       </ScrollView>
      </SafeAreaView>
  );
};

export default RoleSelectionScreen;
