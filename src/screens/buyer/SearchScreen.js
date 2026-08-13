import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Search, X, Filter} from 'lucide-react-native';
import utils from '../../utils';

export default function SearchScreen({navigation}) {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView
      className="flex-1"
      style={{
        backgroundColor: utils.colors.white,
      }}>

      <View className="px-5 pt-4">

        <View className="flex-row items-center">

          <View
            className="flex-1 flex-row items-center h-12 px-4 rounded-xl border"
            style={{
              borderColor: utils.colors.lightGrey,
              backgroundColor: utils.colors.white,
            }}>

            <Search
              size={20}
              color={utils.colors.grey}
            />

            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search auctions, products..."
              placeholderTextColor={utils.colors.grey}
              className="flex-1 ml-3 text-sm"
              style={{
                color: utils.colors.black,
              }}
            />

            {search.length > 0 && (
              <TouchableOpacity
                onPress={() => setSearch('')}>

                <X
                  size={18}
                  color={utils.colors.grey}
                />

              </TouchableOpacity>
            )}

          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Filter')}
            className="w-12 h-12 items-center justify-center ml-2">

            <Filter
              size={21}
              color={utils.colors.theme_color}
            />

          </TouchableOpacity>

        </View>

      </View>

    </SafeAreaView>
  );
}