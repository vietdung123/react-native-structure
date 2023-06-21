import { useTheme } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenOptions } from './NavigationUtils';
import { ScreenNoBottomTab } from '@/Screens/ScreenNoBottomTab';
import AppBottomTab from './AppBottomTab';

export function AppNavigator() {
  const Stack = createNativeStackNavigator();
  const { colors } = useTheme();

  return (
    <Stack.Navigator initialRouteName="AppBottomTab" screenOptions={screenOptions}>
      <Stack.Screen name={'AppBottomTab'} component={AppBottomTab} />
      <Stack.Screen name={'ScreenNoBottomTab'} component={ScreenNoBottomTab} />
    </Stack.Navigator>
  );
}
