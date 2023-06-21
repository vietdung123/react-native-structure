import React, { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Home.style';
import { IHomeProps } from './Home.prop';
import { useAppSelector } from '@/Stores';
import { navigatePush } from '@/Navigators/NavigationUtils';

export const Home = (props: IHomeProps) => {
  const user = useAppSelector(state => state.authState.user);
  console.log({ user });

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <TouchableOpacity onPress={() => navigatePush('ScreenNoBottomTab')}>
        <Text>Home screen</Text>
      </TouchableOpacity>
    </View>
  );
};
