import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils'; 


const AUCTIONS_DATA = [
  {
    id: '1',
    name: 'New Bid Placed',
    comment: 'On Iphone 14 pro max',
    
    status: 'Alerts', 
    time: '5m ago',
    image: utils.assets.onboarding_bid, 
  },
  {
    id: '2',
    name: 'Order Received',
    comment: 'Order #sjfdkre',
    time: '10m ago',
    status: 'Orders',
   
    image: utils.assets.onboarding_bid,
  },
  {
    id: '3',
    name: 'Auction Ending Soon',
    comment: 'MacBook atm2',
    time: '15m ago',
    status: 'Auctions',
  
    image: utils.assets.onboarding_bid,
  },
  {
    id: '4',
    name: 'Payout Initiated',
    comment: '₹24,700 sent to bank',
    time: '2h ago',
    status: 'Alerts',
    image: utils.assets.onboarding_bid,
  },
];

const TABS = ['All', 'Orders', 'Auctions', 'Alerts'];

export default function NotificationScreen({navigation}) {
  const handleSave = () =>
  {
    navigation.navigate('SellerAuctionNavigator')
  }
  const [selectedTab, setSelectedTab] = useState('All');

 
  const filteredData = AUCTIONS_DATA.filter((item) => {
    if (selectedTab === 'All') return true;
    return item.status === selectedTab;
  });


  const renderBadge = (item) => {
    switch (item.status) {
      case 'Alerts':
        return (
          <View className="flex-row items-center bg-green-50 px-2 py-1 rounded border border-green-200">
            <View className="h-2 w-2 rounded-full bg-green-500 mr-2" />
            <Text className="text-green-600 text-[10px] font-bold uppercase">Live</Text>
          </View>
        );
      case 'Orders':
        return (
          <View className="items-end">
            <View className="bg-blue-50 px-2 py-1 rounded border border-blue-100">
              <Text className="text-blue-600 text-[10px] font-bold">Scheduled</Text>
            </View>
            {item.timeRemaining && (
              <Text className="text-red-500 text-[9px] mt-1 font-medium">
                {item.timeRemaining}
              </Text>
            )}
          </View>
        );
      case 'Auctions':
        return (
          <View className="bg-gray-100 px-2 py-1 rounded">
            <Text className="text-gray-500 text-[10px] font-bold">Ended</Text>
          </View>
        );
      default:
        return null;
    }
  };

  const renderAuctionItem = ({ item }) => (
    <View className="flex-row items-center justify-between px-5 py-4">
      <TouchableOpacity className="flex-row items-center flex-1 mr-3">
       
        <View className="h-16 w-16 rounded-2xl items-center justify-center mr-4" style={{ borderColor: utils.colors.lightGrey }}>
          {renderBadge(item)}
        </View>

    
        <View className="flex-1">
          <Text style={{ color: utils.colors.black }} className="font-bold text-[15px]">
            {item.name}
          </Text>
          <Text style={{ color: utils.colors.grey }}>
         <Text style={{ color: utils.colors.black }} >{item.comment}</Text>
          </Text>
        </View>
      </TouchableOpacity>

   
      <View className="items-end justify-center">
        <Text className="mt-0.5" style={{ color: utils.colors.grey }}>
            {item.time}
          </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
    
      <View className="px-5 pt-4 pb-2">
        <Text style={{ color: utils.colors.black }} className="text-2xl font-black">
          Notifications
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
                className="px-5 py-3 mx-1 rounded-xl border"
                style={{
                  backgroundColor: isActive ? utils.colors.theme_color : 'transparent',
                  borderColor: isActive ? utils.colors.theme_color : '#E5E7EB', 
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

  

      <FlatList
        data={filteredData}
        renderItem={renderAuctionItem}
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