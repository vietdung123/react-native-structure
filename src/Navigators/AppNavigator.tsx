import { useTheme } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenOptions } from './NavigationUtils';
import { ScreenNoBottomTab } from '@/Screens/ScreenNoBottomTab';
import AppBottomTab from './AppBottomTab';
import MessengerAppBottomTab from './MessagerAppNavigator/MessengerAppBottomTab';
import { SharedElement } from '@/Screens/SharedElement';
import { DetailSharedElement } from '@/Screens/SharedElement/DetailSharedElement';

export function AppNavigator() {
  const Stack = createNativeStackNavigator();
  const { colors } = useTheme();

  return (
    <Stack.Navigator initialRouteName="AppBottomTab" screenOptions={screenOptions}>
      <Stack.Screen name={'AppBottomTab'} component={AppBottomTab} />
      <Stack.Screen name={'MessengerAppBottomTab'} component={MessengerAppBottomTab} />
      <Stack.Screen name={'ScreenNoBottomTab'} component={ScreenNoBottomTab} />
      <Stack.Screen name={'SharedElement'} component={SharedElement} options={{ animation: 'none' }} />
      <Stack.Screen name={'DetailSharedElement'} component={DetailSharedElement} options={{ animation: 'none' }} />
    </Stack.Navigator>
  );
}
