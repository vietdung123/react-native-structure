import { useTheme } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenOptions } from './NavigationUtils';
import { FeatNavigator } from './FeatNavigator';

export function AppNavigator() {
  const Stack = createNativeStackNavigator();
  const { colors } = useTheme();

  return (
    <Stack.Navigator initialRouteName="FeatNavigator" screenOptions={screenOptions}>
      <Stack.Screen name={'FeatNavigator'} component={FeatNavigator} />
    </Stack.Navigator>
  );
}
