import { MESSENGER_CHAT_STACK } from '@/Constants';
import { ListMessage } from '@/Screens/MessengerApp/ListMessage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { screenOptions } from '../NavigationUtils';

export type HomeStackParam = {
  [MESSENGER_CHAT_STACK.LIST_MSG]: undefined;
};
const Stack = createNativeStackNavigator<HomeStackParam>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={MESSENGER_CHAT_STACK.LIST_MSG} screenOptions={screenOptions}>
      <Stack.Screen name={MESSENGER_CHAT_STACK.LIST_MSG} component={ListMessage} />
    </Stack.Navigator>
  );
};
export default React.memo(HomeNavigator);
