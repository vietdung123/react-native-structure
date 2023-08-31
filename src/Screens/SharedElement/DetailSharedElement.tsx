import AppButton from '@/Components/AppButton';
import { goBack } from '@/Navigators/NavigationUtils';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { sharedTransition2 } from './mock-data';

export const DetailSharedElement = (props: any) => {
  const photo = props.route?.params?.photo;
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Animated.Image
        sharedTransitionStyle={sharedTransition2}
        sharedTransitionTag={photo.id.toString()}
        source={{ uri: photo.url }}
        style={styles.image}
      />
      <AppButton onPress={() => goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('screen').width,
    width: Dimensions.get('screen').width,
  },
});
