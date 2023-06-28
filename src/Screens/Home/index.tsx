import React, { View } from 'react-native';
import { styles } from './Home.style';
import { IHomeProps } from './Home.prop';
import { useAppSelector } from '@/Stores';
import { navigatePush } from '@/Navigators/NavigationUtils';
import AppText from '@/Components/AppText';
import AppButton from '@/Components/AppButton';
import ErrorLabel from '@/Components/ErrorLabel';
import Container from '@/Components/Container';

export const Home = (props: IHomeProps) => {
  const user = useAppSelector(state => state.authState.user);
  console.log({ user });

  return (
    <Container>
      <View style={styles.container}>
        <AppText>Abcd</AppText>
        <AppButton text={'AppBUtton'} onPress={() => navigatePush('ScreenNoBottomTab')} />
        <AppButton text={'MessengerAppBottomTab'} onPress={() => navigatePush('MessengerAppBottomTab')} />
        <ErrorLabel text={'ErrorLabel'} />
      </View>
    </Container>
  );
};
