import { View } from 'react-native';
import { styles } from './style';
import React from 'react';

import {AppButton, Container, ErrorLabel} from '@/Components';
import { STORAGE_KEYS, storage } from '@/Storage';
import { CommonColors } from '@/Theme';
interface IHomeProps {
  navigation: any;
}

const HomeScreen = (props: IHomeProps) => {

  console.log('render Home');

  return (
    <Container>
      <View style={styles.container}>
        <ErrorLabel text={'ErrorLabel'} />
        <AppButton
          text={'Logout'}
          onPress={() => {
            storage.delete(STORAGE_KEYS.TOKEN);
          }}
          textColor={CommonColors.mainDark}
        />
      </View>
    </Container>
  );
};

export default React.memo(HomeScreen);
