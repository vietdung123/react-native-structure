import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PHOTOS, sharedTransition } from './mock-data';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';
import { navigatePush } from '@/Navigators/NavigationUtils';
import { Responsive, ResponsiveStyleSheet } from '@/Theme';
import { FlatList } from 'react-native-gesture-handler';

const PHOTO_WIDTH = Responsive.WIDTH_SCREEN_WITHOUT_PADDING / 2;

export const SharedElement = () => {
  const renderItem = ({item: photo}: any) => {
    return (
      <Pressable
        key={photo.id}
        onPress={() => {
          navigatePush('DetailSharedElement', { photo });
        }}
        style={{ margin: 10 }}
        >
        <Animated.View sharedTransitionTag={photo.id.toString()} sharedTransitionStyle={sharedTransition}>
          <FastImage source={{ uri: photo.url }} style={{ width: PHOTO_WIDTH, height: PHOTO_WIDTH }} />
        </Animated.View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView>
      <FlatList data={PHOTOS} renderItem={renderItem} showsVerticalScrollIndicator={false} numColumns={2} />
    </SafeAreaView>
  );
};

const styles = ResponsiveStyleSheet.create({

});
