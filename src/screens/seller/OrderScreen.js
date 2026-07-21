import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils'; 


const ORDER_DATA = [
  {
    id: '1',
    orderId:'#980OOP',
    name: 'Nandini Joshi',
    price: '₹45,000',
    time: '2 m ago',
    status: 'Pending', 
    badgeText: 'Live',
    image: utils.assets.onboarding_bid, 
  },
  {
    id: '2',
    orderId:'#980OOP',
    name: 'Deeep Pathak',
    price: '₹78,500',
    time: '5 m ago',
    status: 'Pending',
    badgeText: 'Live',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '3',
    orderId:'#980OOP',
    name: 'Suhani Joshi',
    price: '₹18,000',
    time: '9 m ago',
    status: 'Shipped',
    badgeText: 'Scheduled',
    timeRemaining: 'Starts in 3h 20m',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '4',
    orderId:'#980OOP',
    name: 'Mita Joshi',
    price: '₹4,85,000',
    time: '15 m ago',
    status: 'Delievered',
    badgeText: 'Ended',
    image: utils.assets.onboarding_bid,
  },
];

const TABS = ['All', 'Pending', 'Shipped', 'Delievered'];

export default function OrderScreen() {
  const [selectedTab, setSelectedTab] = useState('All');

 
  const filteredData = ORDER_DATA.filter((item) => {
    if (selectedTab === 'All') return true;
    return item.status === selectedTab;
  });


  

  const renderOrderItem = ({ item }) => (
    <View className="flex-row items-center justify-between px-5 py-4 border-b" style={{ borderColor: utils.colors.lightGrey }}>
      <View className="flex-row items-center flex-1 mr-3">
       
        <View className="h-16 w-16 rounded-2xl items-center justify-center mr-4 border" style={{ borderColor: utils.colors.lightGrey }}>
          <Image
            source={item.image}
            style={{ width: 65, height: 60 }}
            resizeMode="contain"
          />
        </View>

    
        <View className="flex-1">
           <Text style={{ color: utils.colors.black }} className="font-bold text-[15px]">
            {item.orderId}
          </Text>
          <Text style={{ color: utils.colors.black }} className="font-bold text-[15px]">
            {item.name}
          </Text>
       
          <Text className="mt-0.5" style={{ color: utils.colors.grey }}>
            {item.status}
          </Text>
        </View>
      </View>

   
      <View className="items-end justify-center">
        <View className="flex-row items-center px-2 py-1">
            <View className="h-2 w-2 rounded-full mr-2" />
            <Text className="text-[10px] font-bold uppercase">{item.price}</Text>
            
          </View>
          <View className="flex-row items-center px-2 py-1">
            <View className="h-2 w-2 rounded-full mr-2" />
    
            <Text className="text-[10px] uppercase">{item.time}</Text>
          </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
    
      <View className="px-5 pt-4 pb-2">
        <Text style={{ color: utils.colors.black }} className="text-2xl font-black">
          Orders
        </Text>
      </View>

  
      <View className="px-5 py-3">
        <FlatList
          horizontal
          data={TABS}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={{ gap: 8 }}
          renderItem={({ item }) => {
            const isActive = selectedTab === item;
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedTab(item)}
                className="px-5 py-3 rounded-xl border"
                style={{
                  backgroundColor: isActive ? utils.colors.blue : 'transparent',
                  borderColor: isActive ? utils.colors.blue : '#E5E7EB', 
                }}
              >
                <Text
                  className="font-bold"
                  style={{ color: isActive ? utils.colors.white : '#6B7280' }} 
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

  
      <View className="h-[1px] mt-1" style={{ backgroundColor: utils.colors.lightGrey }}/>

      <FlatList
        data={filteredData}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="items-center justify-center py-20">
            <Text style={{ color: utils.colors.grey }}>No auctions found in this category.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}