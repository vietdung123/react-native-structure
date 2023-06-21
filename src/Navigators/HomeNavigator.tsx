import { HOME_NAVIGATION } from '@/Constants/RouteNames';
import { Home } from '@/Screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { screenOptions } from './NavigationUtils';

export type HomeStackParam = {
  [HOME_NAVIGATION.NEW_FEED]: undefined;
};
const Stack = createNativeStackNavigator<HomeStackParam>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={HOME_NAVIGATION.NEW_FEED} screenOptions={screenOptions}>
      <Stack.Screen name={HOME_NAVIGATION.NEW_FEED} component={Home} />
    </Stack.Navigator>
  );
};
export default React.memo(HomeNavigator);
