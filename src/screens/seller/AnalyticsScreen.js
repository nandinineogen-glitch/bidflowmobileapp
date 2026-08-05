import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import utils from '../../utils';
import {ChevronDown, Landmark} from 'lucide-react-native';
import {LineChart} from 'react-native-chart-kit';

const chartData = {
  'This Week': {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [25, 42, 35, 60, 48, 72, 65],
      },
    ],
  },
  'This Month': {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        data: [52, 86, 58, 134],
      },
    ],
  },
  'This Year': {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [52, 86, 58, 134, 110, 155],
      },
    ],
  },
};

export default function AnalyticsScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [isOpen, setIsOpen] = useState(false);

  const periods = ['This Week', 'This Month', 'This Year'];

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}>
        
        <View style={{backgroundColor: utils.colors.white}}>
          <View className="flex-row items-center justify-between px-5 pt-6 pb-4">
            <View>
              <Text
                className="text-3xl font-bold mt-0.5"
                style={{color: utils.colors.black}}>
                Analytics
              </Text>

              <Text
                className="text-xl mt-2"
                style={{color: utils.colors.grey}}>
                Track your Performance.
              </Text>
            </View>
          </View>

          <View
            className="mx-5 my-3 rounded-2xl border"
            style={{
              borderColor: utils.colors.lightGrey,
              backgroundColor: utils.colors.white,
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setIsOpen(!isOpen)}
              className="flex-row items-center justify-between px-5 py-5">
              <Text
                className="text-lg font-bold"
                style={{color: utils.colors.grey}}>
                {selectedPeriod}
              </Text>

              <ChevronDown
                size={22}
                color={utils.colors.grey}
                style={{
                  transform: [{rotate: isOpen ? '180deg' : '0deg'}],
                }}
              />
            </TouchableOpacity>

            {isOpen && (
              <View
                className="border-t"
                style={{borderColor: utils.colors.lightGrey}}>
                {periods.map(period => (
                  <TouchableOpacity
                    key={period}
                    activeOpacity={0.7}
                    onPress={() => {
                      setSelectedPeriod(period);
                      setIsOpen(false);
                    }}
                    className="px-5 py-4">
                    <Text
                      className="text-base"
                      style={{
                        color:
                          selectedPeriod === period
                            ? utils.colors.theme_color
                            : utils.colors.black,
                        fontWeight:
                          selectedPeriod === period ? '700' : '400',
                      }}>
                      {period}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View className="flex-row justify-between px-4 py-4">
            <TouchableOpacity
              className="border rounded-xl items-center flex-1 py-3 mx-1"
              style={{borderColor: utils.colors.lightGrey}}>
              <Text
                style={{color: utils.colors.gray}}
                className="text-center">
                Views
              </Text>

              <Text
                style={{color: utils.colors.black}}
                className="text-2xl font-bold mt-2">
                12,560
              </Text>

              <Text
                style={{color: utils.colors.green}}
                className="text-lg font-bold mt-2">
                11.5%
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="border rounded-xl items-center flex-1 py-3 mx-1"
              style={{borderColor: utils.colors.lightGrey}}>
              <Text
                style={{color: utils.colors.gray}}
                className="text-center">
                Bids
              </Text>

              <Text
                style={{color: utils.colors.black}}
                className="text-2xl font-bold mt-2">
                320
              </Text>

              <Text
                style={{color: utils.colors.green}}
                className="text-lg font-bold mt-2">
                8.2%
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="border rounded-xl items-center flex-1 py-3 mx-1"
              style={{borderColor: utils.colors.lightGrey}}>
              <Text
                style={{color: utils.colors.gray}}
                className="text-center">
                Orders
              </Text>

              <Text
                style={{color: utils.colors.black}}
                className="text-2xl font-bold mt-2">
                28
              </Text>

              <Text
                style={{color: utils.colors.green}}
                className="text-lg font-bold mt-2">
                15.3%
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="border-b border-gray-300 my-4 mx-5" />

        <View>
          <Text
            style={{color: utils.colors.black}}
            className="text-xl font-bold px-5 pt-5 pb-2">
            Earnings Overview
          </Text>

          <Text
            style={{color: utils.colors.black}}
            className="text-3xl font-bold px-5">
            ₹85,420
          </Text>
        </View>

        <View className="mt-3">
          <LineChart
            data={chartData[selectedPeriod]}
            width={410}
            height={240}
            bezier
            fromZero
            withDots
            withShadow={false}
            withInnerLines={true}
            withOuterLines={false}
            withVerticalLines={false}
            withHorizontalLines={true}
            chartConfig={{
              backgroundColor: utils.colors.white,
              backgroundGradientFrom: utils.colors.white,
              backgroundGradientTo: utils.colors.white,
              decimalPlaces: 0,
              color: () => utils.colors.theme_color,
              labelColor: () => utils.colors.grey,
              propsForDots: {
                r: '4',
                strokeWidth: '2',
                stroke: utils.colors.theme_color,
              },
              propsForBackgroundLines: {
                strokeDasharray: '',
                strokeWidth: 1,
                stroke: utils.colors.lightGrey,
              },
            }}
            style={{
              marginLeft: -5,
              borderRadius: 16,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}