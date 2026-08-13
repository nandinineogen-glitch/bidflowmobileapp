
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Bell} from 'lucide-react-native';
import utils from '../../utils';

const NOTIFICATIONS = [
  {
    id: '1',
    name: 'New Bid Placed',
    comment: 'On iPhone 14 Pro Max',
    status: 'Active',
    time: '5m ago',
  },
  {
    id: '2',
    name: 'Order Received',
    comment: 'Order #sjfdkre',
    status: 'Won',
    time: '10m ago',
  },
  {
    id: '3',
    name: 'Auction Ending Soon',
    comment: 'MacBook Air M2',
    status: 'Lost',
    time: '15m ago',
  },
  {
    id: '4',
    name: 'Payout Initiated',
    comment: '₹24,700 sent to bank',
    status: 'Active',
    time: '2h ago',
  },
];

const TABS = ['Active', 'Won', 'Lost'];

export default function MybidsScreen({navigation}) {
  const [selectedTab, setSelectedTab] = useState('Active');

  const filteredNotifications = NOTIFICATIONS.filter(item => {
    return item.status === selectedTab;
  });

  const getBackgroundColor = status => {
    if (status === 'Active') {
      return '#EFF6FF';
    }

    if (status === 'Won') {
      return '#F5F3FF';
    }

    if (status === 'Lost') {
      return '#FFF7ED';
    }

    return '#F3F4F6';
  };

  const renderNotification = ({item}) => {
    const openOrder = () => {
      if (item.status === 'Won') {
        navigation.navigate('Order');
      }
    };

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={openOrder}
        className="flex-row items-center px-5 py-4">

        <View
          className="w-14 h-14 rounded-2xl items-center justify-center mr-4"
          style={{
            backgroundColor: getBackgroundColor(item.status),
          }}>
          <Bell
            size={24}
            color={utils.colors.theme_color}
          />
        </View>

        <View className="flex-1">
          <Text
            className="text-[15px] font-bold"
            style={{color: utils.colors.black}}>
            {item.name}
          </Text>

          <Text
            className="text-[13px] mt-1"
            style={{color: utils.colors.grey}}>
            {item.comment}
          </Text>
        </View>

        <Text
          className="text-xs"
          style={{color: utils.colors.grey}}>
          {item.time}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>

      <View className="px-5 pt-5">
        <Text
          className="text-2xl font-black"
          style={{color: utils.colors.black}}>
          My Bids
        </Text>
      </View>

      <View className="border-b mt-4">
        <FlatList
          horizontal
          data={TABS}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            const isSelected = selectedTab === item;

            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedTab(item)}
                className="px-14 py-3 border-b-2"
                style={{
                  borderColor: isSelected
                    ? utils.colors.theme_color
                    : utils.colors.white,
                }}>

                <Text
                  className="font-bold"
                  style={{
                    color: isSelected
                      ? utils.colors.theme_color
                      : utils.colors.grey,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <FlatList
        data={filteredNotifications}
        renderItem={renderNotification}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        ListEmptyComponent={
          <View className="items-center justify-center py-20">
            <Bell
              size={42}
              color={utils.colors.lightGrey}
            />

            <Text
              className="mt-4 font-semibold"
              style={{color: utils.colors.grey}}>
              No notifications found
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
