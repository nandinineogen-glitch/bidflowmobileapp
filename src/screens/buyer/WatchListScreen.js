import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Heart, Clock3} from 'lucide-react-native';
import utils from '../../utils';

const AUCTIONS_DATA = [
  {
    id: '1',
    name: 'iPhone 14 Pro Max',
    Price: '₹45,000',
    extra: 'Apple iphone',
    timeRemaining: '2h 30m 30s',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    Price: '₹78,500',
    extra: 'Apple laptop',
    timeRemaining: '1h 15m 45s',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    Price: '₹18,000',
    extra: 'Sony headphones',
    timeRemaining: '3h 20m',
    image: utils.assets.onboarding_bid,
  },
  {
    id: '4',
    name: 'Rolex Submariner',
    Price: '₹4,85,000',
    extra: 'Rolex watch',
    timeRemaining: '2h 30m 30s',
    image: utils.assets.onboarding_bid,
  },
];

export default function WatchList({navigation}) {
  const renderAuctionItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails')}
      className="flex-row items-center px-5 py-4 border-b"
      style={{borderColor: utils.colors.lightGrey}}>

      <View
        className="h-16 w-16 rounded-2xl items-center justify-center mr-4 border"
        style={{borderColor: utils.colors.lightGrey}}>
        <Image
          source={item.image}
          style={{width: 65, height: 60}}
          resizeMode="contain"
        />
      </View>

      <View className="flex-1">
        <View className="flex-row items-center justify-between">
          <Text
            className="font-bold text-[15px] flex-1"
            style={{color: utils.colors.black}}>
            {item.name}
          </Text>

          <Heart
            size={20}
            color={utils.colors.red}
            fill={utils.colors.red}
          />
        </View>

        <Text
          className="font-bold text-[15px] mt-1"
          style={{color: utils.colors.black}}>
          {item.extra}
        </Text>

        <Text
          className="font-bold text-[15px] mt-1"
          style={{color: utils.colors.black}}>
          {item.Price}
        </Text>

        <View className="flex-row items-center mt-1">
          <Clock3
            size={13}
            color={utils.colors.red}
          />

          <Text
            className="ml-2 text-sm"
            style={{color: utils.colors.red}}>
            {item.timeRemaining}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>

      <View className="px-5 pt-5 pb-3">
        <Text
          className="text-2xl font-black"
          style={{color: utils.colors.black}}>
          My WatchList ({AUCTIONS_DATA.length})
        </Text>
      </View>

      <FlatList
        data={AUCTIONS_DATA}
        renderItem={renderAuctionItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="items-center justify-center py-20">
            <Text style={{color: utils.colors.grey}}>
              No auctions found.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}