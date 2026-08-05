import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import utils from '../../utils';
import { Eye, EyeOff } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ResetPasswordScreen = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: utils.colors.white }}
    >
      <ScrollView className="p-10">
        <View
          className="mt-28"
          style={{ backgroundColor: utils.colors.white }}
        >
          <utils.components.Header label="Reset Password" />

          <Text
            className="text-lg mt-2 mb-10 font-bold"
            style={{ color: utils.colors.grey }}
          >
            Create a new password for your account
          </Text>

          <Text
            className="text-lg mt-10 mb-2"
            style={{ color: utils.colors.black }}
          >
            Current Password
          </Text>

          <View
            className="border rounded-xl px-4 flex-row items-center"
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <TextInput
              placeholder="Your Current Password"
              className="h-14 flex-1"
              secureTextEntry={!showCurrentPassword}
              style={{ color: utils.colors.black }}
            />

            <TouchableOpacity
              onPress={() =>
                setShowCurrentPassword(!showCurrentPassword)
              }
            >
              {showCurrentPassword ? (
                <Eye
                  size={20}
                  color={utils.colors.grey}
                />
              ) : (
                <EyeOff
                  size={20}
                  color={utils.colors.grey}
                />
              )}
            </TouchableOpacity>
          </View>

          <Text
            className="text-lg mt-10 mb-2"
            style={{ color: utils.colors.black }}
          >
            New Password
          </Text>

          <View
            className="border rounded-xl px-4 flex-row items-center"
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <TextInput
              placeholder="Enter New Password"
              className="h-14 flex-1"
              secureTextEntry={!showNewPassword}
              style={{ color: utils.colors.black }}
            />

            <TouchableOpacity
              onPress={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? (
                <Eye
                  size={20}
                  color={utils.colors.grey}
                />
              ) : (
                <EyeOff
                  size={20}
                  color={utils.colors.grey}
                />
              )}
            </TouchableOpacity>
          </View>

          <Text
            className="text-lg mt-10 mb-2"
            style={{ color: utils.colors.black }}
          >
            Confirm Password
          </Text>

          <View
            className="border rounded-xl px-4 flex-row items-center"
            style={{ borderColor: utils.colors.lightGrey }}
          >
            <TextInput
              placeholder="Confirm Your Password"
              className="h-14 flex-1"
              secureTextEntry={!showConfirmPassword}
              style={{ color: utils.colors.black }}
            />

            <TouchableOpacity
              onPress={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? (
                <Eye
                  size={20}
                  color={utils.colors.grey}
                />
              ) : (
                <EyeOff
                  size={20}
                  color={utils.colors.grey}
                />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="rounded-xl py-4 mb-4 mt-10"
            style={{ backgroundColor: utils.colors.blue }}
          >
            <Text
              className="text-center text-lg font-bold"
              style={{ color: utils.colors.white }}
            >
              Reset Password
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;