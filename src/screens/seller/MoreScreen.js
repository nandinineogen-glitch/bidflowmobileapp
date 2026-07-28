import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import utils from '../../utils';

const MENU = [
  {id: '1', title: 'Profile', link:'SellerNavigator'},
  {id: '2', title: 'Settings', link:'SellerNavigator'},
  {id: '3', title: 'Earnings', link:'SellerNavigator'},
  {id: '4', title: 'Wallet', link:'SellerNavigator'},
  {id: '5', title: 'Analytics', link:'SellerNavigator'},
  {id: '6', title: 'Notifications', link:'SellerNavigator'},
  {id: '7', title: 'Logout', link:'SellerNavigator'}
];

export default function MoreScreen({navigation}) {
  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={ () => navigation.navigate(item.link)}
      className="mx-5 mb-4 rounded-3xl px-5 py-5"
      style={{
        backgroundColor: utils.colors.white,
        borderLeftWidth: 5,
        borderLeftColor: utils.colors.blue,
        elevation: 5,
        shadowColor: utils.colors.black,
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 3},
      }}>
      <View className="flex-row items-center justify-between">
        <Text
          className="text-lg font-bold"
          style={{color: utils.colors.black}}>
          {item.title}
        </Text>

        <Text
          style={{
            fontSize: 24,
            color: utils.colors.grey,
            fontWeight: '600',
          }}>
          ›
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.lightblue}}>
      <View className="px-5 pt-5 pb-2">
        <Text
          className="text-3xl font-bold"
          style={{color: utils.colors.black}}>
          More
        </Text>

        <Text
          className="mt-1"
          style={{
            color: utils.colors.grey,
            fontSize: 15,
          }}>
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