import React  from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from '../../utils';



export default function PendingApproval({ navigation }) {
  

  const handleSave = () => {
    
   navigation.navigate('SellerBottomTab');
  }
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: utils.colors.white }}
    >
      <View className="flex-1 justify-between">
        <View className="flex-1 items-center justify-center px-8">
          <Image
            source={utils.assets.sand_clock}
            className="w-52 h-52"
            resizeMode="contain"
          />

          <Text
            className="text-3xl font-bold mt-8"
            style={{ color: utils.colors.black }}
          >
            Under Review
          </Text>

          <Text
            className="text-center text-base mt-5"
            style={{ color: utils.colors.grey }}
          >
            Your product is under review by
          </Text>

          <Text
            className="text-center text-base"
            style={{ color: utils.colors.grey }}
          >
            our team. You will be notified
          </Text>

          <Text
            className="text-center text-base"
            style={{ color: utils.colors.grey }}
          >
            once it's approved.
          </Text>
        </View>

        <View className="px-6 py-16">
          <TouchableOpacity
            className="rounded-xl py-4 "
            style={{ backgroundColor: utils.colors.theme_color }}
            onPress={handleSave}
          >
            <Text
              className="text-center text-lg font-bold "
              style={{ color: utils.colors.white }}
            >
              Ok, Got It
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}