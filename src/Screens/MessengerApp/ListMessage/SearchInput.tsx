import SearchSvg from '@/Assets/Svgs/SearchSvg';
import AppInput from '@/Components/AppInput';
import Box from '@/Components/Box';
import Padding from '@/Components/Padding';
import { CommonColors, Layout, ResponsiveStyleSheet } from '@/Theme';
import React from 'react';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { scale } from 'react-native-size-scaling';
import { HEADER_HEIGHT, INPUT_SEARCH_HEIGHT } from '.';
import { useAppTheme } from '@/Hooks';
export const SearchInput = ({ translationY }: any) => {
  const { Colors } = useAppTheme();

  const styleColorAppTheme = React.useMemo(
    () =>
      ResponsiveStyleSheet.create({
        bgInput: {
          backgroundColor: Colors.inputBackground,
        },
      }),
    [Colors],
  );

  const animatedHeightStyles = useAnimatedStyle(() => {
    return {
      height: interpolate(translationY.value, [0, INPUT_SEARCH_HEIGHT], [INPUT_SEARCH_HEIGHT, 0], {
        extrapolateRight: Extrapolation.CLAMP,
      }),
    };
  });

  const animatedOpacityStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translationY.value, [0, 10], [1, 0], {
        extrapolateRight: Extrapolation.CLAMP,
      }),
    };
  });

  return (
    <Box
      style={[Layout.containerHPadding, Layout.absolute, Layout.fullWidth, styles.container, { top: HEADER_HEIGHT }]}
      paddingTop={4}
      paddingBottom={8}>
      <Animated.View style={[animatedHeightStyles, styleColorAppTheme.bgInput, styles.bgInput]}>
        <Animated.View
          style={[
            animatedOpacityStyles,
            Layout.row,
            Layout.absolute,
            Layout.fullWidth,
            Layout.alignItemsCenter,
            { padding: scale(8) },
          ]}>
          <SearchSvg size={16} color={CommonColors.k8E8E93} />
          <Padding left={6} />
          <AppInput
            placeholder="Search"
            fontSize={17}
            placeholderTextColor={CommonColors.k8E8E93}
            style={[Layout.resetInput, Layout.fullWidth, { height: INPUT_SEARCH_HEIGHT }]}
          />
        </Animated.View>
      </Animated.View>
    </Box>
  );
};

const styles = ResponsiveStyleSheet.create({
  container: { zIndex: 2 },
  bgInput: {
    borderRadius: 18,
    justifyContent: 'center',
    height: INPUT_SEARCH_HEIGHT,
  },
});
