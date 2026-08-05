import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Bell,
  PackageCheck,
  Gavel,
} from 'lucide-react-native';
import utils from '../../utils';

const NOTIFICATIONS_DATA = [
  {
    id: '1',
    name: 'New Bid Placed',
    comment: 'On iPhone 14 Pro Max',
    status: 'Alerts',
    time: '5m ago',
  },
  {
    id: '2',
    name: 'Order Received',
    comment: 'Order #sjfdkre',
    status: 'Orders',
    time: '10m ago',
  },
  {
    id: '3',
    name: 'Auction Ending Soon',
    comment: 'MacBook Air M2',
    status: 'Auctions',
    time: '15m ago',
  },
  {
    id: '4',
    name: 'Payout Initiated',
    comment: '₹24,700 sent to bank',
    status: 'Alerts',
    time: '2h ago',
  },
];

const TABS = ['All', 'Orders', 'Auctions', 'Alerts'];

export default function NotificationScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('All');

  const filteredData = NOTIFICATIONS_DATA.filter(item => {
    if (selectedTab === 'All') {
      return true;
    }

    return item.status === selectedTab;
  });

  const getNotificationIcon = status => {
    switch (status) {
      case 'Orders':
        return <PackageCheck size={24} color={utils.colors.theme_color} />;

      case 'Auctions':
        return <Gavel size={24} color={utils.colors.theme_color} />;

      case 'Alerts':
        return <Bell size={24} color={utils.colors.theme_color} />;

      default:
        return <Bell size={24} color={utils.colors.theme_color} />;
    }
  };

  const getNotificationBackground = status => {
    switch (status) {
      case 'Orders':
        return '#EFF6FF';

      case 'Auctions':
        return '#F5F3FF';

      case 'Alerts':
        return '#FFF7ED';

      default:
        return '#F3F4F6';
    }
  };

  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex-row items-center px-5 py-4"
    >
      <View
        className="h-14 w-14 rounded-2xl items-center justify-center mr-4"
        style={{
          backgroundColor: getNotificationBackground(item.status),
        }}
      >
        {getNotificationIcon(item.status)}
      </View>

      <View className="flex-1 mr-3">
        <Text
          style={{ color: utils.colors.black }}
          className="font-bold text-[15px]"
        >
          {item.name}
        </Text>

        <Text
          style={{ color: utils.colors.grey }}
          className="mt-1 text-[13px]"
        >
          {item.comment}
        </Text>
      </View>

      <View className="items-end justify-center">
        <Text
          className="text-[12px]"
          style={{ color: utils.colors.grey }}
        >
          {item.time}
        </Text>
      </View>
    </TouchableOpacity>
  );

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
          Notifications
        </Text>

        <Text
          className="mt-1"
          style={{
            color: utils.colors.grey,
            fontSize: 14,
          }}
        >
          Stay updated with your latest activity
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
        className="h-[1px]"
        style={{
          backgroundColor: utils.colors.lightGrey,
        }}
      />

      <FlatList
        data={filteredData}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="items-center justify-center py-20 px-5">
            <Bell
              size={42}
              color={utils.colors.lightGrey}
            />

            <Text
              className="mt-4 text-base font-semibold"
              style={{
                color: utils.colors.grey,
              }}
            >
              No notifications found
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}