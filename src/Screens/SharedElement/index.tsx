import React from 'react';
import { Pressable } from 'react-native';
import { PHOTOS, sharedTransitionIn } from './mock-data';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';
import { navigatePush } from '@/Navigators/NavigationUtils';
import { Responsive, ResponsiveStyleSheet } from '@/Theme';
import { FlashList } from '@shopify/flash-list';
import Container from '@/Components/Container';
import Margin from '@/Components/Margin';

const PHOTO_WIDTH = Responsive.WIDTH_SCREEN_WITHOUT_PADDING / 2 - 50;

export const SharedElement = () => {
  const renderItem = ({ item: photo }: any) => {
    return (
      <Margin margin={10} key={photo.id}>
        <Pressable
          onPress={() => {
            navigatePush('DetailSharedElement', { photo });
          }}>
          <Animated.View sharedTransitionTag={'shareTag' + photo.id} sharedTransitionStyle={sharedTransitionIn} >
            <FastImage source={{ uri: photo.url }} style={styles.image} />
          </Animated.View>
        </Pressable>
      </Margin>
    );
  };
  return (
    <Container style={{ flex: 1 }}>
      <FlashList
        data={PHOTOS}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={PHOTO_WIDTH}
      />
    </Container>
  );
};

const styles = ResponsiveStyleSheet.create({
  image: {
    width: PHOTO_WIDTH,
    height: PHOTO_WIDTH,
  },
});
