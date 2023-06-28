import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { screenOptions } from '../NavigationUtils';
import { MESSENGER_BOTTOM_TAB } from '@/Constants';
import { Layout } from '@/Theme';
import ChatNavigator from './ChatNavigator';
import MessengerBottomTabBar from '@/Components/MessengerBottomTabBar';

export type TabBottomStackParam = {
  [MESSENGER_BOTTOM_TAB.CHAT]: undefined;
  [MESSENGER_BOTTOM_TAB.DISCOVER]: undefined;
  [MESSENGER_BOTTOM_TAB.FRIENDS]: undefined;
};
// tabBarVisible: false no longer exists on v6 but you can use tabBarStyle: { display: 'none' } instead. I found out here

// https://reactnavigation.org/docs/upgrading-from-5.x/#the-tabbarvisible-option-is-no-longer-present

const Tab = createBottomTabNavigator<TabBottomStackParam>();
const MessengerAppBottomTab = () => {
  return (
    <View style={[Layout.fill]}>
      <Tab.Navigator tabBar={props => <MessengerBottomTabBar {...props} />} screenOptions={screenOptions}>
        <Tab.Screen name={MESSENGER_BOTTOM_TAB.CHAT} component={ChatNavigator} />
        <Tab.Screen name={MESSENGER_BOTTOM_TAB.FRIENDS} component={ChatNavigator} />
        <Tab.Screen name={MESSENGER_BOTTOM_TAB.DISCOVER} component={ChatNavigator} />
      </Tab.Navigator>
    </View>
  );
};

export default MessengerAppBottomTab;
