import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import utils from '../../utils'; 


export default function MoreScreen() {
  
  

  return (
 
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
       <ScrollView>
    <View style={{ backgroundColor: utils.colors.white }}>

      <View className="mx-5 my-3 rounded-2xl p-5" style={{ backgroundColor: utils.colors.lightGrey , borderColor: utils.colors.black }}>
        
        <View className="flex-row justify-between items-start">
          <TouchableOpacity>
            <Text className="text-lg font-bold" style={{ color: utils.colors.black }}>Profile</Text>
          </TouchableOpacity>
          
        </View>
      </View>

      <View className="mx-5 my-3 rounded-2xl p-5" style={{ backgroundColor: utils.colors.lightGrey , borderColor: utils.colors.black }}>
        
        <View className="flex-row justify-between items-start">
          <TouchableOpacity>
            <Text className="text-lg font-bold" style={{ color: utils.colors.black }}>Bank & Payout Details</Text>
          </TouchableOpacity>
          
        </View>
      </View>



      <View className="mx-5 my-3 rounded-2xl p-5" style={{ backgroundColor: utils.colors.lightGrey , borderColor: utils.colors.black }}>
        
        <View className="flex-row justify-between items-start">
          <TouchableOpacity>
            <Text className="text-lg font-bold" style={{ color: utils.colors.black }}>Earnings</Text>
          </TouchableOpacity>
          
        </View>
      </View>




      <View className="mx-5 my-3 rounded-2xl p-5" style={{ backgroundColor: utils.colors.lightGrey , borderColor: utils.colors.black }}>
        
        <View className="flex-row justify-between items-start">
          <TouchableOpacity>
            <Text className="text-lg font-bold" style={{ color: utils.colors.black }}>Analytics</Text>
          </TouchableOpacity>
          
        </View>
      </View>


 

      <View className="mx-5 my-3 rounded-2xl p-5" style={{ backgroundColor: utils.colors.lightGrey , borderColor: utils.colors.black }}>
        
        <View className="flex-row justify-between items-start">
          <TouchableOpacity>
            <Text className="text-lg font-bold" style={{ color: utils.colors.black }}>Notifications</Text>
          </TouchableOpacity>
          
        </View>
      </View>

     </View>
    </ScrollView>
    </SafeAreaView>
   
  );
}

