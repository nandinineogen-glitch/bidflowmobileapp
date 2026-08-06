import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ArrowLeft,
  Bell,
  Heart,
  MessageCircle,
  Clock3,
  Users
} from 'lucide-react-native';
import utils from '../../utils';

const DATA = [
  {
    id: '1',
    name: 'Rahul Sharma',
    amount: '₹62,500',
    time: 'Just now',
    url: utils.assets.profile
  },
  {
    id: '2',
    name: 'Neha Patel',
    amount: '₹61,000',
    time: '30s ago',
    url: utils.assets.profile
  },
  {
    id: '3',
    name: 'Ankit Verma',
    amount: '₹60,500',
    time: '1m ago',
    url: utils.assets.profile
  },

];

export default function LiveAuctionScreen({navigation, route}) {

      const renderItem = ({ item }) => (
      
    <View className="flex-row items-center justify-between py-3">

      <View className="flex-row items-center">

        <View
          className="w-10 h-10 rounded-full items-center justify-center"
          style={{ backgroundColor: utils.colors.lightGrey }}
        >
           <Image
            source={item.url}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>

        <Text
          className="ml-3 text-base font-semibold"
          style={{ color: utils.colors.black }}
        >
          {item.name}
        </Text>

      </View>

      <View className="items-end">

        <Text
          className="font-bold text-base"
          style={{ color: utils.colors.black }}
        >
          {item.amount}
        </Text>

        <Text
          className="text-xs"
          style={{ color: utils.colors.grey }}
        >
          {item.time}
        </Text>

      </View>

    </View>
  );
  const auction = route?.params?.auction || {
    title: 'iPhone 14 Pro Max 256GB',
    subtitle: 'Deep Purple',
    price: 45000,
    highestBidLabel: 'Highest Bid',
    bids: 32,
    time: '02h 15m 30s',
    marketPrice: 129900,
    discount: 65,
    condition: 'Like New',
    location: 'Mumbai, India',
    image: utils.assets.onboarding_bid,
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}>
        <View className="px-5 pt-2">
          <View className="flex-row items-center justify-between mb-4">
            <View classname="h-10 px-20 items-center" style={{backgroundColor: utils.colors.red}}>
               <Text style={{color: utils.colors.white}}>Live</Text>
            </View>

            <View className="items-center justify-start ml-2">
  <TouchableOpacity
    className="flex-row h-10 w-16 items-center justify-center border border-gray-100"
    onPress={() => {}}
  >
    <Users
      size={20}
      color={utils.colors.gray}
     
    />
    <Text>142</Text>
  </TouchableOpacity>


</View>

          </View>

          <View
            className="w-full rounded-3xl items-center justify-center overflow-hidden"
            style={{
              height: 200,
                backgroundColor: utils.colors.white,
            }}>
            <Image
              source={auction.image}
              resizeMode="contain"
              style={{
                width: '70%',
                height: '90%',
              }}
            />
          </View>

          <View className="mt-5">
            <Text
              className="text-2xl font-black"
              style={{color: utils.colors.black}}>
              {auction.title}
            </Text>

            <Text
              className="text-lg mt-1 font-semibold"
              style={{color: utils.colors.black}}>
              {auction.subtitle}
            </Text>

            <View className="flex-row items-end justify-between mt-4">
              <View>
                <Text
                  className="text-2xl font-black"
                  style={{color: utils.colors.black}}>
                  ₹{auction.price.toLocaleString('en-IN')}
                </Text>
              </View>

              <Text
                className="text-base font-semibold"
                style={{color: utils.colors.grey}}>
                {auction.highestBidLabel || 'Highest Bid'}
              </Text>

              <Text
                className="text-base font-semibold"
                style={{color: utils.colors.grey}}>
                {auction.bids} Bids
              </Text>
            </View>

            <View className="flex-row items-center mt-4">
              <Clock3
                size={17}
                color={utils.colors.red}
              />

              <Text
                className="text-lg font-bold ml-2"
                style={{color: utils.colors.red}}>
                {auction.time}
              </Text>
            </View>

           <Text
                     className="text-xl font-bold mt-10 mb-3"
                     style={{ color: utils.colors.black }}
                   >
                     Bids History
                   </Text>

            
             <FlatList
                      data={DATA}
                      keyExtractor={item => item.id}
                      renderItem={renderItem}
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={{ paddingBottom: 20 }}
                    />
              

            <View className="flex-row items-center mt-8">
              <TouchableOpacity
                activeOpacity={0.85}
                className="flex-[1.6] h-14 rounded-2xl items-center justify-center"
                style={{backgroundColor: utils.colors.theme_color}}
                onPress={() => navigation.navigate('BidSuccess')}>
                <Text
                  className="text-base font-bold"
                  style={{color: utils.colors.white}}>
                  Place Bid
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
