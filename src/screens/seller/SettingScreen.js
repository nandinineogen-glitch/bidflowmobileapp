import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronRight, ChevronDown} from 'lucide-react-native';
import utils from '../../utils';

export default function SettingScreen({navigation}) {
  const [auctionAlerts, setAuctionAlerts] = useState(true);
  const [bidUpdates, setBidUpdates] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(true);

  const Row = ({title, value}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex-row items-center justify-between py-5">
      <View>
        <Text
          className="text-base font-semibold"
          style={{color: utils.colors.black}}>
          {title}
        </Text>

        
      </View>
{value ? (
          <Text
            className="text-sm mt-1 -mr-52 items-end text-end"
            style={{color: utils.colors.grey}}>
            {value}
          </Text>
        ) : null}
        
      
      <ChevronRight size={22} color={utils.colors.grey} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      className="flex-1"
      style={{backgroundColor: utils.colors.white}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}>

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
              <View>
                <Text
                  className="text-base font-semibold"
                  style={{color: utils.colors.black}}>
                  Push Notifications 
                </Text>


              </View>

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
              <View>
                <Text
                  className="text-base font-semibold"
                  style={{color: utils.colors.black}}>
                  Emial Notifications
                </Text>

               
              </View>

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
              <View>
                <Text
                  className="text-base font-semibold"
                  style={{color: utils.colors.black}}>
                  SMS Notifications
                </Text>

               
              </View>

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

            <Row title="Theme" value="Light" />

          

            <Row title="Language" value="English" />

          

            <Row title="Currency" value="INR(₹)" />
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
              style={{
                height: 1,
                backgroundColor: utils.colors.lightGrey,
              }}
              className='w-400 mt-32'
            />
         
            <Text
              className="text-lg font-bold mt-5 ml-5"
              style={{color: utils.colors.red}}>
              Logout
            </Text>
         

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}