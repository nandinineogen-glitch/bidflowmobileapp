import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils';
import { UserPen,Landmark } from 'lucide-react-native';

const DATA = [
  {
    id: '1',
    title: 'Store Profile',
    verified: false,
  },
  {
    id: '2',
    title: 'Bank Details',
    verified: false,
  },
];

export default function ProfileScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="flex-row items-center justify-between py-5 border-b"
      style={{ borderColor: utils.colors.lightGrey }}
    >
      <View className="flex-row items-center">
        <View
          className="w-10 h-10 rounded-full items-center justify-center"
         
        >
          {item.id == 1 ?(
         <UserPen
                  size={20}
                  color={utils.colors.grey}
                />):(
                   <Landmark
                  size={20}
                  color={utils.colors.grey}
                />
                )}
        </View>

        <Text
          className="ml-4 text-lg font-semibold"
          style={{ color: utils.colors.black }}
        >
          {item.title}
        </Text>
      </View>

      <View className="flex-row items-center">
        {item.verified && (
          <View
            className="px-3 py-1 rounded-full mr-3"
            style={{ backgroundColor: '#DFF8E8' }}
          >
            <Text
              className="font-bold"
              style={{ color: '#16A34A' }}
            >
              Verified
            </Text>
          </View>
        )}

        <Text
          className="text-2xl"
          style={{ color: utils.colors.grey }}
        >
          ›
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
  className="flex-1"
  style={{backgroundColor: utils.colors.theme_color}}
>
  <View
    style={{
      height: 250,
      backgroundColor: utils.colors.theme_color,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
    }}
  />

  <View
    style={{
      flex: 1,
      backgroundColor: utils.colors.white,
      marginTop: -60,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingTop: 90,
      paddingHorizontal: 24,
    }}
  >
    <Text
      className="text-3xl font-bold text-center"
      style={{color: utils.colors.black}}
    >
      John Doe
    </Text>

    <Text
      className="text-base text-center mt-2"
      style={{color: utils.colors.grey}}
    >
      john.doe@gmail.com
    </Text>

    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingTop: 30}}
    />

    <View
              style={{
                height: 1,
                backgroundColor: utils.colors.lightGrey,
              }}
              className='w-400 -mt-44'
            />
         
            <Text
              className="text-lg font-bold mt-5 ml-5"
              style={{color: utils.colors.red}}>
              Logout
            </Text>
  </View>


    <Image
      source={utils.assets.profile}
      style={{
        width: 115,
        height: 115,
        borderRadius: 54,
        position: 'absolute',
          top: 165,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 12,
      shadowColor: '#000',
      shadowOpacity: 0.15,
      shadowRadius: 12,
      }}
    />

</SafeAreaView>
  );
}