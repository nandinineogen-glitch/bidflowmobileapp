import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import utils from '../../utils'; 


const DATA = [
  {

    id: 1,
    Activity: 'New order received',
    name: 'iPhone 14 Pro Max',
    image: utils.assets.onboarding_bid, 
    time: "2m ago"
  },
  {
    id: 2,
    Activity: 'New bid placed',
    name: 'On Bbock for trade',
    image: utils.assets.onboarding_bid, 
    time: "5m ago"
  },
  {
    id: 3,
    Activity: 'Auction ending soon',
    name: 'MacBook Air M2',
    image: utils.assets.onboarding_bid,
    time: "15m ago"
  },
  {
    id: 4,
    Activity: 'Auction ending soon',
    name: 'MacBook Air M2',
    image: utils.assets.onboarding_bid,
    time: "15m ago"
  },
  {
    id: 5,
    Activity: 'Auction ending soon',
    name: 'MacBook Air M2',
    image: utils.assets.onboarding_bid,
    time: "15m ago"
  },
];

export default function DashboardScreen() {
  
  const renderActivityItem = ({ item }) => (
    <ScrollView>
    <View className="flex-row items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: utils.colors.lightGrey }}>
      <View className="flex-row items-center flex-1">
       
        <View className="h-12 w-12 rounded-xl items-center justify-center mr-4 border" style={{ borderColor: utils.colors.lightGrey }} >
          <Image
            source={item.image}
            style={{ width: 26, height: 26 }}
          />
        </View>
        
       
        <View className="flex-1">
          <Text style={{ color: utils.colors.black }} className="font-bold text-xl">
            {item.Activity}
          </Text>
          <Text style={{ color: utils.colors.gray }} className="mt-0.5">
            {item.name}
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
          <Text className="text-xl" style={{ color: utils.colors.grey }}>
            Good morning,
          </Text>
          <Text className="text-3xl font-bold mt-0.5" style={{ color: utils.colors.black }}>
            John Doe 
          </Text>
        </View>
        <Image
          source={utils.assets.profile}
          style={{ width: 70, height: 70 }}
        />
      </View>

      
      <View className="mx-5 my-3 rounded-2xl p-5" style={{ backgroundColor: utils.colors.theme_color }}>
        
        <View className="flex-row justify-between items-start">
          <View>
            <Text className="text-xl font-bold" style={{ color: utils.colors.white }}>Total Balance</Text>
            <Text className="text-3xl font-bold mt-1.5" style={{ color: utils.colors.white }}>₹24,560.00</Text>
          </View>
          
          <View className="h-7 w-7 rounded-full border items-center justify-center mt-1" style={{ borderColor: utils.colors.white }}>
            <View className="h-3 w-3 rounded-full" style={{ backgroundColor: utils.colors.white }}/>
          </View>
        </View>

       
        <View className="flex-row justify-between items-center mt-6">
          <Text style={{ color: utils.colors.white }}>Available for payout</Text>
          <TouchableOpacity 
            className="rounded-xl px-5 py-2.5 " 
            style={{ backgroundColor: utils.colors.white }}
          >
            <Text className="font-bold" style={{ color: utils.colors.theme_color }}>
              Withdraw
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      
      <View className="flex-row justify-between px-4 py-4">
       
        <View className="border rounded-xl items-center flex-1 py-3 mx-1" style={{ borderColor: utils.colors.lightGrey }}>
          <Text style={{ color: utils.colors.gray }} className="text-center">Active Auctions</Text>
          <Text style={{ color: utils.colors.black }} className="text-2xl font-bold mt-2">12</Text>
        </View>
        
        
        <View className="border rounded-xl items-center flex-1 py-3 mx-1"  style={{ borderColor: utils.colors.lightGrey }} >
          <Text style={{ color: utils.colors.gray }} className="text-center">Total Orders</Text>
          <Text style={{ color: utils.colors.black }} className="text-2xl font-bold mt-2">36</Text>
        </View>
        
      
        <View className="border rounded-xl items-center flex-1 py-3 mx-1">
          <Text style={{ color: utils.colors.gray }} className="text-center">Total Earnings</Text>
          <Text style={{ color: utils.colors.black }} className="text-2xl font-bold mt-2">₹1,24,560</Text>
        </View>
      </View>

     
      <View className="h-[1px] bg-gray-100 mt-2 mx-5" />
      <Text style={{ color: utils.colors.black }} className="text-xl font-bold px-5 pt-5 pb-2">
        Recent Activity
      </Text>
    </View>
      <FlatList
        data={DATA}
        renderItem={renderActivityItem}
        keyExtractor={item => item.id.toString()}
        
        contentContainerStyle={{ paddingBottom: 30 }}

      />
    
    </SafeAreaView>
   
  );
}

