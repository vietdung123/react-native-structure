import React from 'react';
import AppButton from '@/Components/AppButton';
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
  withSpring,
  interpolate,
  FadeInLeft,
  FadeInRight,
} from 'react-native-reanimated';
import { sharedTransitionIn } from './mock-data';
import FastImage from 'react-native-fast-image';
import { screenWidth } from '@/Theme';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

export const DetailSharedElement = (props: any) => {
  const photo = props.route?.params?.photo || {};
  const aniOpacity = useSharedValue(1);
  const goBack = () => {
    'worklet';
    aniOpacity.value = withSpring(0, { duration: 100 }, () => runOnJS(props.navigation.goBack)());
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(aniOpacity.value, [0, 1], [screenWidth * 0.5, screenWidth], 'clamp'),
      height: interpolate(aniOpacity.value, [0, 1], [screenWidth * 0.5, screenWidth], 'clamp'),
    };
  });

  const buttonStyle = useAnimatedStyle(() => {
    return {
      opacity: aniOpacity.value,
    };
  });

  return (
    <Animated.View style={{ flex: 1, marginTop: 50, ...animatedStyle }}>
      <Animated.View
        sharedTransitionTag={'shareTag' + photo.id}
        sharedTransitionStyle={sharedTransitionIn}
        style={styles.image}>
        <AnimatedFastImage source={{ uri: photo.url }} style={animatedStyle} />
      </Animated.View>
      <Animated.Text
        style={[styles.text, buttonStyle]}
        entering={FadeInLeft.duration(500).delay(300)}>
        {photo.description}
      </Animated.Text>
      <Animated.View style={buttonStyle}>
        <AppButton text="Go back" onPress={() => goBack()} />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: screenWidth,
    width: screenWidth,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Lato-Regular',
    color: '#000',
  },
});
