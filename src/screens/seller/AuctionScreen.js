import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils';

const AUCTIONS_DATA = [
  {
    id: '1',
    name: 'iPhone 14 Pro Max',
    startingPrice: '₹45,000',
    bidsCount: '18 Bids',
    status: 'Active',
    badgeText: 'Live',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    startingPrice: '₹78,500',
    bidsCount: '12 Bids',
    status: 'Active',
    badgeText: 'Live',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    startingPrice: '₹18,000',
    bidsCount: '5 Bids',
    status: 'Scheduled',
    badgeText: 'Scheduled',
    timeRemaining: 'Starts in 3h 20m',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '4',
    name: 'Rolex Submariner',
    startingPrice: '₹4,85,000',
    bidsCount: '8 Bids',
    status: 'Ended',
    badgeText: 'Ended',
    image: utils.assets.onboarding_bid,
  },
];

const TABS = ['All', 'Active', 'Scheduled', 'Ended'];

export default function AuctionScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('All');

  const handleSave = () => {
    navigation.navigate('LiveAuctionMonitor');
  };

  const filteredData = AUCTIONS_DATA.filter(item => {
    if (selectedTab === 'All') return true;
    return item.status === selectedTab;
  });

  const renderBadge = item => {
    switch (item.status) {
      case 'Active':
        return (
          <View className="flex-row items-center bg-green-50 px-2 py-1 rounded border border-green-200">
            <View className="h-2 w-2 rounded-full bg-green-500 mr-2" />
            <Text className="text-green-600 text-[10px] font-bold uppercase">
              Live
            </Text>
          </View>
        );

      case 'Scheduled':
        return (
          <View className="items-end">
            <View className="bg-blue-50 px-2 py-1 rounded border border-blue-100">
              <Text className="text-blue-600 text-[10px] font-bold">
                Scheduled
              </Text>
            </View>

            {item.timeRemaining && (
              <Text className="text-red-500 text-[9px] mt-1 font-medium">
                {item.timeRemaining}
              </Text>
            )}
          </View>
        );

      case 'Ended':
        return (
          <View className="bg-gray-100 px-2 py-1 rounded">
            <Text className="text-gray-500 text-[10px] font-bold">
              Ended
            </Text>
          </View>
        );

      default:
        return null;
    }
  };

  const renderAuctionItem = ({ item }) => {
    const isLive = item.status === 'Active';

    return (
      <View
        className="flex-row items-center justify-between px-5 py-4 border-b"
        style={{ borderColor: utils.colors.lightGrey }}
      >
        <TouchableOpacity
          className="flex-row items-center flex-1 mr-3"
          activeOpacity={isLive ? 0.7 : 1}
          disabled={!isLive}
          onPress={isLive ? handleSave : undefined}
        >
          <View
            className="h-16 w-16 rounded-2xl items-center justify-center mr-4 border"
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <Image
              source={item.image}
              style={{ width: 65, height: 60 }}
              resizeMode="contain"
            />
          </View>

          <View className="flex-1">
            <Text
              style={{ color: utils.colors.black }}
              className="font-bold text-[15px]"
            >
              {item.name}
            </Text>

            <Text style={{ color: utils.colors.grey }}>
              Starting{' '}
              <Text style={{ color: utils.colors.black }}>
                {item.startingPrice}
              </Text>
            </Text>

            <Text
              className="mt-0.5"
              style={{ color: utils.colors.grey }}
            >
              {item.bidsCount}
            </Text>
          </View>
        </TouchableOpacity>

        <View className="items-end justify-center">
          {renderBadge(item)}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: utils.colors.white }}
    >
      <View className="px-5 pt-4 pb-2">
        <Text
          style={{ color: utils.colors.black }}
          className="text-2xl font-black"
        >
          My Auctions
        </Text>
      </View>

      <View className="px-5 py-3">
        <FlatList
          horizontal
          data={TABS}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          contentContainerStyle={{ gap: 8 }}
          renderItem={({ item }) => {
            const isActive = selectedTab === item;

            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedTab(item)}
                className="px-5 py-3 rounded-xl border"
                style={{
                  backgroundColor: isActive
                    ? utils.colors.theme_color
                    : 'transparent',
                  borderColor: isActive
                    ? utils.colors.theme_color
                    : '#E5E7EB',
                }}
              >
                <Text
                  className="font-bold"
                  style={{
                    color: isActive
                      ? utils.colors.white
                      : '#6B7280',
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View
        className="h-[1px] mt-1"
        style={{ backgroundColor: utils.colors.lightGrey }}
      />

      <FlatList
        data={filteredData}
        renderItem={renderAuctionItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="items-center justify-center py-20">
            <Text style={{ color: utils.colors.grey }}>
              No auctions found in this category.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}