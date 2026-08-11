
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import utils from '../../utils';

const {width, height} = Dimensions.get('window');

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
      'Become the highest bidder before the timer ends and win amazing deals.',
    image: utils.assets.onboarding_win,
  },
  {
    id: 3,
    highlight: 'Own.',
    description:
      "Complete payment, track your order and enjoy the products you've won.",
    image: utils.assets.onboarding_own,
  },
];

const OnBoardingScreen = ({navigation}) => {
  const [current, setCurrent] = useState(0);

  const flatListRef = useRef(null);

  const nextPage = () => {
    if (current < DATA.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: current + 1,
        animated: true,
      });
    } else {
      navigation.navigate('Roleselection');
    }
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{
        backgroundColor: utils.colors.white,
      }}>

      <FlatList
        ref={flatListRef}
        data={DATA}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        onMomentumScrollEnd={event => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / width,
          );

          setCurrent(index);
        }}
        renderItem={({item}) => (
          <View
            className="px-9"
            style={{
              width: width,
              paddingTop: height * 0.14,
            }}>

            <View className="flex-row justify-center">

              {DATA.map(data => (
                <Text
                  key={data.id}
                  className="text-4xl font-bold mx-2"
                  style={{
                    color:
                      item.highlight === data.highlight
                        ? utils.colors.black
                        : utils.colors.theme_color,
                  }}>
                  {data.highlight}
                </Text>
              ))}

            </View>

            <Text
              className="text-lg mt-10 font-bold text-center"
              style={{
                color: utils.colors.grey,
                paddingHorizontal: width * 0.08,
              }}>
              {item.description}
            </Text>

            <View
              className="items-center"
              style={{
                marginTop: height * 0.09,
              }}>

              <Image
                source={item.image}
                resizeMode="contain"
                style={{
                  width: width * 0.52,
                  height: width * 0.52,
                }}
              />

            </View>

          </View>
        )}
      />

      <View className="flex-row justify-center mb-8">

        {DATA.map((item, index) => (
          <View
            key={item.id}
            className="h-4 w-4 mx-2 rounded-full"
            style={{
              backgroundColor:
                current === index
                  ? utils.colors.black
                  : utils.colors.theme_color,
            }}
          />
        ))}

      </View>

      <TouchableOpacity
        onPress={nextPage}
        activeOpacity={0.8}
        className="rounded-xl h-14 mx-12 mb-10 items-center justify-center"
        style={{
          backgroundColor: utils.colors.theme_color,
        }}>

        <Text
          className="text-lg font-bold"
          style={{
            color: utils.colors.white,
          }}>
          Next
        </Text>

      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default OnBoardingScreen;

