import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import utils from '../../utils';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const DATA = [
  {
    id: 1,
    highlight: 'Bid.',
    description:
      'Join thousands of people bidding on amazing products at the best prices.',
    image: utils.assets.onboarding_bid,
  },
  {
    id: 2,
    highlight: 'Win.',
    description:
      'Become the highest bidder before the timer end and win amazing deals.',
    image: utils.assets.onboarding_win,
  },
  {
    id: 3,
    highlight: 'Own.',
    description:
      "Complete payment,track your order and enjoy the products you've win.",
    image: utils.assets.onboarding_own,
  },
];

const OnBoardingScreen = ({ navigation }) => {
  const [current, setCurrent] = useState(0);

  const flatlistRef = useRef(null);

  const nextPage = () => {
    if (current < DATA.length - 1) {
      flatlistRef.current?.scrollToIndex({
        index: current + 1,
        animated: true,
      });
    }
    else {
      navigation.replace('Roleselection');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: utils.colors.white }}>
      <View
        className="mt-28 justify-center"
        style={{ backgroundColor: utils.colors.white }}
      >
        <FlatList
          ref={flatlistRef}
          data={DATA}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          onMomentumScrollEnd={(e) => {
            const index = Math.round(
              e.nativeEvent.contentOffset.x / width
            );
            setCurrent(index);
          }}
          renderItem={({ item }) => (
            <View className="px-9" style={{ width }}>
              <View className="px-16 flex-row justify-between items-center">
                <Text
                   style={{
                  color:
                    item.highlight ===  "Bid."
                      ? utils.colors.black
                      : utils.colors.theme_color
                }}
                 className='text-4xl font-bold'
                >
                  Bid.
                </Text>

                <Text
           
                  style={{
                  color:
                    item.highlight ===  "Win."
                      ? utils.colors.black
                      : utils.colors.theme_color
                }}
                 className='text-4xl font-bold'
                >
                  Win.
                </Text>

                <Text
                    style={{
                  color:
                    item.highlight ===  "Own."
                      ? utils.colors.black
                      : utils.colors.theme_color
                }}
                 className='text-4xl font-bold'
                >
                  Own.
                </Text>
              </View>

              <Text
                className="text-lg mt-10 font-bold text-center px-16"
                style={{ color: utils.colors.grey }}
              >
                {item.description}
              </Text>

              <View
                className="self-center mt-24"
                style={{ backgroundColor: utils.colors.white }}
              >
                <Image
                  source={item.image}
                  style={{ width: 200, height: 200 }}
                />
              </View>
            </View>
          )}
          
        />

        <View className="flex-row mt-8 justify-center">
          {DATA.map((_, index) => (
            <View
              key={index}
             
              className="h-10 w-10 border-r-10 mx-6"
              style={{
                  color:
                    current ==  index
                      ? utils.colors.black
                      : utils.colors.theme_color
                }}
            />
          ))}
        </View>

        <View className="flex-row justify-between mt-28 px-12">
          <Text
            className="text-lg mt-10 font-bold text-center"
            style={{ color: utils.colors.theme_color }}
          >
            Skip
          </Text>

          <TouchableOpacity
            className="rounded-3xl py-3 px-6 mb-4 mt-10"
            onPress={nextPage}
            style={{ backgroundColor: utils.colors.theme_color }}
          >
            <Text
              className="text-center text-lg font-bold"
              style={{ color: utils.colors.white }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;