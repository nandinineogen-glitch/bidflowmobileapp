import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import utils from '../../utils';

const DATA = [
  {
    id: '1',
    name: 'Rahul Sharma',
    amount: '₹62,500',
    time: 'Just now',
  },
  {
    id: '2',
    name: 'Neha Patel',
    amount: '₹61,000',
    time: '30s ago',
  },
  {
    id: '3',
    name: 'Ankit Verma',
    amount: '₹60,500',
    time: '1m ago',
  },
];

export default function BidHistory() {
 
    const renderItem = ({ item }) => (
    <View className="flex-row items-center justify-between py-3">

      <View className="flex-row items-center">

        <View
          className="w-10 h-10 rounded-full items-center justify-center"
          style={{ backgroundColor: utils.colors.lightGrey }}
        >
          
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

  return (
    
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <View className="flex-1 mx-8">
        <View className="pt-6 pb-6">
          <Text
            className="text-3xl font-bold"
            style={{color: utils.colors.black}}>
            Bid History
          </Text>

          <View className="w-56 mt-2">
            <Text
              className="text-base"
              style={{color: utils.colors.grey}}>
              See all bids on your auction.
            </Text>
          </View>
        </View>
        <FlatList
                  data={DATA}
                  keyExtractor={item => item.id}
                  renderItem={renderItem}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 20 }}
                />
        </View>
        </SafeAreaView>
  );
}