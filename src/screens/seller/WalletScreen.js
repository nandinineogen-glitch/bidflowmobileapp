import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import utils from '../../utils'; 
import {ChevronDown , Landmark} from 'lucide-react-native';

const DATA = [
  {

    id: 1,
    Activity: 'Payout to bank',
    date: '20 MAY 2024',
   
    time: "-₹24,000"
  },
  {
    id: 2,
    Activity: 'Order Payment',
    date: '10 MAY 2024',
  
    time: "-₹63,000"
  },
  
];

export default function WalletScreen() {
  
    const renderActivityItem = ({ item }) => (
    <ScrollView>
    <View className="flex-row items-center justify-between px-5 py-3.5">
      <View className="flex-row items-center flex-1">
       
        <View className="h-12 w-12 rounded-xl items-center justify-center mr-4" style={{ borderColor: utils.colors.lightGrey }} >
          <Landmark
           
            style={{ width: 26, height: 26 , color: utils.colors.theme_color}}
          />
        </View>
        
       
        <View className="flex-1">
          <Text style={{ color: utils.colors.black }} className="font-bold text-xl">
            {item.Activity}
          </Text>
          <Text style={{ color: utils.colors.gray }} className="mt-0.5">
            {item.date}
          </Text>
        </View>
      </View>

      
      <Text style={{ color: utils.colors.gray }}>
        {item.time}
      </Text>
    </View>
    </ScrollView>
  );

  return (
 
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
       
    <View style={{ backgroundColor: utils.colors.white }}>
      
     
      <View className="flex-row items-center justify-between px-5 pt-6 pb-4">
        <View>
          <Text className="text-3xl font-bold mt-0.5" style={{ color: utils.colors.black }}>
            Wallet
          </Text>
          <Text className="text-xl mt-2" style={{ color: utils.colors.grey }}>
          Manage ypour balance and payouts.
          </Text>
        </View>
        
      </View>

      
      <View className="mx-5 my-3 py-10 pt-7 rounded-2xl p-5" style={{ backgroundColor: utils.colors.theme_color }}>
        
        <View className="flex-row justify-between items-start">
          <View>
            <Text className="text-xl font-bold" style={{ color: utils.colors.white }}>Avalilable balance</Text>
            <Text className="text-3xl font-bold mt-1.5" style={{ color: utils.colors.white }}>₹1,24,560</Text>
          </View>
         <ChevronDown style={{ color : utils.colors.white}}/>
        </View>
      </View>

      
    

     
      <View className="flex-row items-center justify-between mt-2 ml-2 mr-7 mb-4">
      
      <Text style={{ color: utils.colors.grey }} className="text-lg px-5 pt-5 pb-2">
        On hold
      </Text>
      
      <Text style={{ color: utils.colors.grey }} className="text-lg">
        ₹85,420
      </Text>
      </View>

     

     <View className="flex-row items-center justify-between mt-2 ml-2 mr-7">
      
      <Text style={{ color: utils.colors.grey }} className="text-lg px-5 pt-5 pb-2">
        Total Balance
      </Text>
      
      <Text style={{ color: utils.colors.grey }} className="text-lg">
        ₹66,240
      </Text>
      </View>
    

       <TouchableOpacity className="rounded-xl py-4 mx-4 mt-8" style={{ backgroundColor: utils.colors.theme_color }}>
                  <Text className="text-center text-lg font-bold" style={{ color: utils.colors.white }}>Withdraw Funds</Text>
                </TouchableOpacity>

    
                    
            
    </View>
      
    <Text style={{ color: utils.colors.black }} className="text-xl font-bold px-5 pt-5 pb-2 mt-5">
        Transaction History
      </Text>

      <FlatList
              data={DATA}
              renderItem={renderActivityItem}
              keyExtractor={item => item.id.toString()}
              
              contentContainerStyle={{ paddingBottom: 30 }}
      
            />
    </SafeAreaView>
    
  );
}

