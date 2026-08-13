import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronRight} from 'lucide-react-native';
import utils from '../../utils';

export default function SettingScreen({navigation}) {
  const [auctionAlerts, setAuctionAlerts] = useState(true);
  const [bidUpdates, setBidUpdates] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(true);

  const handleLogout = () => {
    navigation.navigate('LogoutScreen');
  };

  const Row = ({title, value}) => (
    <TouchableOpacity
      className="flex-row items-center justify-between py-5">

      <Text
        className="text-base font-semibold"
        style={{color: utils.colors.black}}>
        {title}
      </Text>

      <View className="flex-row items-center">

        {value ? (
          <Text
            className="text-sm mr-3"
            style={{color: utils.colors.grey}}>
            {value}
          </Text>
        ) : null}

        <ChevronRight
          size={22}
          color={utils.colors.grey}
        />

      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}>

        <View className="mx-7 pt-6">

          <Text
            className="text-3xl font-bold"
            style={{color: utils.colors.black}}>
            Settings
          </Text>

          <View
            className="mt-8 rounded-3xl px-5 py-2"
            style={{
              backgroundColor: utils.colors.white,
            }}>

            <View className="flex-row items-center justify-between py-5">

              <Text
                className="text-base font-semibold"
                style={{color: utils.colors.black}}>
                Push Notifications
              </Text>

              <Switch
                value={auctionAlerts}
                onValueChange={setAuctionAlerts}
                trackColor={{
                  false: utils.colors.lightGrey,
                  true: utils.colors.green,
                }}
                thumbColor={utils.colors.white}
              />

            </View>

            <View className="flex-row items-center justify-between py-5">

              <Text
                className="text-base font-semibold"
                style={{color: utils.colors.black}}>
                Email Notifications
              </Text>

              <Switch
                value={bidUpdates}
                onValueChange={setBidUpdates}
                trackColor={{
                  false: utils.colors.lightGrey,
                  true: utils.colors.green,
                }}
                thumbColor={utils.colors.white}
              />

            </View>

            <View className="flex-row items-center justify-between py-5">

              <Text
                className="text-base font-semibold"
                style={{color: utils.colors.black}}>
                SMS Notifications
              </Text>

              <Switch
                value={marketingEmails}
                onValueChange={setMarketingEmails}
                trackColor={{
                  false: utils.colors.lightGrey,
                  true: utils.colors.green,
                }}
                thumbColor={utils.colors.white}
              />

            </View>

          </View>

          <View
            className="rounded-3xl px-5"
            style={{
              backgroundColor: utils.colors.white,
            }}>

            <Row
              title="Theme"
              value="Light"
            />

            <Row
              title="Language"
              value="English"
            />

            <Row
              title="Currency"
              value="INR(₹)"
            />

          </View>

          <View
            style={{
              height: 1,
              backgroundColor: utils.colors.lightGrey,
            }}
          />

          <View
            className="mt-2 rounded-3xl px-5"
            style={{
              backgroundColor: utils.colors.white,
            }}>

            <Row title="Help & Support" />

            <Row title="Terms & Conditions" />

            <Row title="Privacy Policy" />

          </View>

          <View
            className="mt-10 mb-5"
            style={{
              height: 1,
              backgroundColor: utils.colors.lightGrey,
            }}
          />

          <TouchableOpacity
            onPress={handleLogout}>

            <Text
              className="text-lg font-bold ml-5"
              style={{color: utils.colors.red}}>
              Logout
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}