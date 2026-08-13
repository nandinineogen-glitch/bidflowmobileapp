import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Clock3, Users, X} from 'lucide-react-native';
import utils from '../../utils';

const BIDS = [
  {
    id: '1',
    name: 'Rahul Sharma',
    amount: '₹62,500',
    time: 'Just now',
    image: utils.assets.profile,
  },
  {
    id: '2',
    name: 'Neha Patel',
    amount: '₹61,000',
    time: '30s ago',
    image: utils.assets.profile,
  },
  {
    id: '3',
    name: 'Ankit Verma',
    amount: '₹60,500',
    time: '1m ago',
    image: utils.assets.profile,
  },
];

export default function LiveAuctionScreen({navigation}) {
  const [showBidModal, setShowBidModal] = useState(false);
  const [bidAmount, setBidAmount] = useState('62500');

  const handlePlaceBid = () => {
    setShowBidModal(true);
  };

  const addBidAmount = amount => {
    const currentAmount = Number(bidAmount) || 0;
    setBidAmount(String(currentAmount + amount));
  };

  const handleSubmitBid = () => {
    setShowBidModal(false);
    navigation.navigate('BidSuccess');
  };

  const renderBid = ({item}) => {
    return (
      <View className="flex-row items-center justify-between py-3">
        <View className="flex-row items-center">
          <Image
            source={item.image}
            className="w-10 h-10 rounded-full"
          />

          <Text
            className="ml-3 text-base font-semibold"
            style={{
              color: utils.colors.black,
            }}>
            {item.name}
          </Text>
        </View>

        <View className="items-end">
          <Text
            className="text-base font-bold"
            style={{
              color: utils.colors.black,
            }}>
            {item.amount}
          </Text>

          <Text
            className="text-xs"
            style={{
              color: utils.colors.grey,
            }}>
            {item.time}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{
        backgroundColor: utils.colors.white,
      }}>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}>

        <View className="px-5 pt-3">

          <View className="flex-row items-center justify-between mb-4">

            <View
              className="px-5 py-2 rounded-lg"
              style={{
                backgroundColor: utils.colors.red,
              }}>
              <Text
                className="font-bold"
                style={{
                  color: utils.colors.white,
                }}>
                Live
              </Text>
            </View>

            <TouchableOpacity
              className="flex-row items-center justify-center border rounded-lg px-3 py-2"
              style={{
                borderColor: utils.colors.lightGrey,
              }}>

              <Users
                size={18}
                color={utils.colors.grey}
              />

              <Text
                className="ml-2"
                style={{
                  color: utils.colors.black,
                }}>
                142
              </Text>

            </TouchableOpacity>

          </View>

          <View
            className="w-full rounded-3xl items-center justify-center"
            style={{
              height: 200,
              backgroundColor: utils.colors.white,
            }}>

            <Image
              source={utils.assets.onboarding_bid}
              resizeMode="contain"
              className="w-[70%] h-[90%]"
            />

          </View>

          <Text
            className="text-2xl font-black mt-5"
            style={{
              color: utils.colors.black,
            }}>
            iPhone 14 Pro Max 256GB
          </Text>

          <Text
            className="text-lg font-semibold mt-1"
            style={{
              color: utils.colors.black,
            }}>
            Deep Purple
          </Text>

          <View className="flex-row items-end justify-between mt-4">

            <View>

              <Text
                className="text-2xl font-black"
                style={{
                  color: utils.colors.black,
                }}>
                ₹45,000
              </Text>

              <Text
                className="text-sm"
                style={{
                  color: utils.colors.grey,
                }}>
                Highest Bid
              </Text>

            </View>

            <Text
              className="text-sm"
              style={{
                color: utils.colors.grey,
              }}>
              32 Bids
            </Text>

          </View>

          <View className="flex-row items-center mt-4">

            <Clock3
              size={18}
              color={utils.colors.red}
            />

            <Text
              className="text-lg font-bold ml-2"
              style={{
                color: utils.colors.red,
              }}>
              02h 15m 30s
            </Text>

          </View>

          <Text
            className="text-xl font-bold mt-10 mb-3"
            style={{
              color: utils.colors.black,
            }}>
            Bids History
          </Text>

          <FlatList
            data={BIDS}
            keyExtractor={item => item.id}
            renderItem={renderBid}
            scrollEnabled={false}
          />

          <TouchableOpacity
            className="h-14 rounded-2xl items-center justify-center mt-6"
            style={{
              backgroundColor: utils.colors.theme_color,
            }}
            onPress={handlePlaceBid}>

            <Text
              className="text-base font-bold"
              style={{
                color: utils.colors.white,
              }}>
              Place Bid
            </Text>

          </TouchableOpacity>

        </View>
      </ScrollView>

      <Modal
        visible={showBidModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowBidModal(false)}>

        <KeyboardAvoidingView
          className="flex-1"
          behavior={
            Platform.OS === 'ios'
              ? 'padding'
              : undefined
          }>

          <View className="flex-1 bg-black/50 justify-end">

            <View
              className="rounded-t-3xl px-5 pt-6 pb-8"
              style={{
                backgroundColor: utils.colors.white,
              }}>

              <View className="flex-row items-center justify-between">

                <Text
                  className="text-xl font-bold"
                  style={{
                    color: utils.colors.black,
                  }}>
                  Place Your Bid
                </Text>

                <TouchableOpacity
                  className="w-9 h-9 items-center justify-center"
                  onPress={() => setShowBidModal(false)}>

                  <X
                    size={23}
                    color={utils.colors.black}
                  />

                </TouchableOpacity>

              </View>

              <View className="flex-row justify-between mt-7">

                <View>

                  <Text
                    className="text-sm"
                    style={{
                      color: utils.colors.grey,
                    }}>
                    Current Bid
                  </Text>

                  <Text
                    className="text-lg font-bold mt-1"
                    style={{
                      color: utils.colors.black,
                    }}>
                    ₹45,000
                  </Text>

                </View>

                <View>

                  <Text
                    className="text-sm"
                    style={{
                      color: utils.colors.grey,
                    }}>
                    Next Minimum Bid
                  </Text>

                  <Text
                    className="text-lg font-bold mt-1"
                    style={{
                      color: utils.colors.black,
                    }}>
                    ₹45,500
                  </Text>

                </View>

              </View>

              <Text
                className="text-base font-bold mt-7"
                style={{
                  color: utils.colors.black,
                }}>
                Enter Bid Amount
              </Text>

              <View className="flex-row mt-4">

                <TouchableOpacity
                  className="flex-1 h-14 rounded-xl border items-center justify-center mr-2"
                  style={{
                    borderColor: utils.colors.lightGrey,
                  }}
                  onPress={() => addBidAmount(500)}>

                  <Text
                    className="font-semibold"
                    style={{
                      color: utils.colors.black,
                    }}>
                    +₹500
                  </Text>

                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 h-14 rounded-xl border items-center justify-center mx-1"
                  style={{
                    borderColor: utils.colors.lightGrey,
                  }}
                  onPress={() => addBidAmount(1000)}>

                  <Text
                    className="font-semibold"
                    style={{
                      color: utils.colors.black,
                    }}>
                    +₹1,000
                  </Text>

                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 h-14 rounded-xl border items-center justify-center ml-2"
                  style={{
                    borderColor: utils.colors.lightGrey,
                  }}
                  onPress={() => addBidAmount(2000)}>

                  <Text
                    className="font-semibold"
                    style={{
                      color: utils.colors.black,
                    }}>
                    +₹2,000
                  </Text>

                </TouchableOpacity>

              </View>

              <TextInput
                value={bidAmount}
                onChangeText={text => {
                  const amount = text.replace(
                    /[^0-9]/g,
                    '',
                  );

                  setBidAmount(amount);
                }}
                keyboardType="numeric"
                className="h-14 border rounded-xl px-4 mt-5 text-base font-semibold"
                style={{
                  borderColor: utils.colors.lightGrey,
                  color: utils.colors.black,
                }}
              />

              <TouchableOpacity
                className="h-14 rounded-2xl items-center justify-center mt-5"
                style={{
                  backgroundColor:
                    utils.colors.theme_color,
                }}
                onPress={handleSubmitBid}>

                <Text
                  className="text-base font-bold"
                  style={{
                    color: utils.colors.white,
                  }}>
                  Submit Bid
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </KeyboardAvoidingView>
      </Modal>

    </SafeAreaView>
  );
}