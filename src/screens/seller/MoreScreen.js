import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils';
import { AuthContext } from '../../context/AuthContext';

const MENU = [
  { id: '1', title: 'Profile', link: 'ProfileScreen' },
  { id: '2', title: 'Settings', link: 'SettingScreen' },
  { id: '3', title: 'Earnings', link: 'EarningScreen' },
  { id: '4', title: 'Wallet', link: 'WalletScreen' },
  { id: '5', title: 'Analytics', link: 'AnalyticsScreen' },
  { id: '6', title: 'Notifications', link: 'NotificationScreen' },
  { id: '7', title: 'Logout', link:'LogoutScreen'}
];

export default function MoreScreen({ navigation }) {
  const { setIsLoggedIn, setRole, setProfileCompleted } =
    useContext(AuthContext);

  const handlePress = item => {
    if (item.link === 'Logout') {
      setIsLoggedIn(false);
      setRole(null);
      setProfileCompleted(false);
      return;
    }

    navigation.navigate(item.link);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => handlePress(item)}
      className="mx-5 mb-4 rounded-3xl px-5 py-5"
      style={{
        backgroundColor: utils.colors.white,
        borderLeftWidth: 5,
        borderLeftColor: utils.colors.theme_color,
        elevation: 5,
        shadowColor: utils.colors.black,
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
      }}
    >
      <View className="flex-row items-center justify-between">
        <Text
          className="text-lg font-bold"
          style={{ color: utils.colors.black }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            fontSize: 24,
            color: utils.colors.grey,
            fontWeight: '600',
          }}
        >
          ›
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: utils.colors.lightblue }}
    >
      <View className="px-5 pt-5 pb-2">
        <Text
          className="text-3xl font-bold"
          style={{ color: utils.colors.black }}
        >
          More
        </Text>

        <Text
          className="mt-1"
          style={{
            color: utils.colors.grey,
            fontSize: 15,
          }}
        >
          Manage your account and preferences
        </Text>
      </View>

      <FlatList
        data={MENU}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 30,
        }}
      />
    </SafeAreaView>
  );
}