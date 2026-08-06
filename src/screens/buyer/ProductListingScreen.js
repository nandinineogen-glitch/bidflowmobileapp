import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils'; 
import {

  Filter,
  Clock3,
  
} from 'lucide-react-native';

const AUCTIONS_DATA = [
  {
    id: '1',
    name: 'iPhone 14 Pro Max',
    Price: '₹45,000',
    bidsCount: '18 Bids',
    extra: 'Apple iphone',
    timeRemaining: '2h 30m 30s',
    image: utils.assets.onboarding_bid, 
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    Price: '₹78,500',
    bidsCount: '12 Bids',
    extra: 'Apple laptop',
    timeRemaining: '1h 15m 45s',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    Price: '₹18,000',
    bidsCount: '5 Bids',
    extra: 'Sony headphones',
    timeRemaining: '3h 20m',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '4',
    name: 'Rolex Submariner',
    Price: '₹4,85,000',
    bidsCount: '8 Bids',
    extra: 'Rolex watch',
    timeRemaining: '2h 30m 30s',
    image: utils.assets.onboarding_bid,
  },
];


export default function ProductListingScreen({navigation}) {
  const handleSave = () =>
  {
    navigation.navigate('ProductDetails')
  }



  const renderAuctionItem = ({ item }) => (
    <View className="flex-row justify-between px-5 py-4 ">
      <TouchableOpacity className="flex-row items-center flex-1 mr-3" onPress={handleSave}>
       
        <View className="h-16 w-16 rounded-2xl items-center justify-center mr-4 border" style={{ borderColor: utils.colors.lightGrey }}>
          <Image
            source={item.image}
            style={{ width: 65, height: 60 }}
            resizeMode="contain"
          />
        </View>

    
        <View className="flex-1">
          <Text style={{ color: utils.colors.black }} className="font-bold text-[15px]">
            {item.name}
          </Text>
          <Text style={{ color: utils.colors.black }} className="font-bold text-[15px]">
            {item.extra}
          </Text>
         
            <Text style={{ color: utils.colors.black }} className="font-bold text-[15px]">
              {item.Price}
            </Text>
            <View className="flex-row justify-between" style={{ borderColor: utils.colors.lightGrey }}>
                <View className="flex-row items-center">
                    <Clock3
            size={13}
            color={utils.colors.red}
          />
             <Text className="mt-0.5 ml-2" style={{ color: utils.colors.red }}>
            {item.timeRemaining}
          </Text>
          </View>
           <Text style={{ color: utils.colors.black }}>
       {item.bidsCount}
      </Text>
          </View>
        
        </View>
      </TouchableOpacity>

   
      
    </View>
  );

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: utils.colors.white }}>
    <View className="flex-row items-center justify-between px-5 pt-4 pb-2">
      <View className="px-5 pt-4 pb-2">
        <Text style={{ color: utils.colors.black }} className="text-2xl font-black">
           Electronics
        </Text>
      </View>
         <TouchableOpacity
            activeOpacity={0.8}
             onPress={() => navigation.navigate('Filter')}
            className="w-11 h-11 rounded-xl items-center justify-center"
            >
            <Filter
              size={20}
              color={utils.colors.theme_color}
            />
          </TouchableOpacity>
  </View>

      <FlatList
        data={AUCTIONS_DATA}
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