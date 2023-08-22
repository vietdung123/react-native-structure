import Container from '@/Components/Container';
import React from 'react';
import { Header } from './Header';
import { ConversationItem } from './ConversationItem';
import { Layout } from '@/Theme';
import { SearchInput } from './SearchInput';
import Animated, { scrollTo, useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { scale } from 'react-native-size-scaling';
export const HEADER_HEIGHT = scale(64);
export const INPUT_SEARCH_HEIGHT = scale(36);
export const ListMessage = () => {
  const flatListRef = useAnimatedRef<any>();
  const translationY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: event => {
        translationY.value = event.contentOffset.y;
      },
      onEndDrag: event => {
        if (event.contentOffset.y < INPUT_SEARCH_HEIGHT / 2) {
          scrollTo(flatListRef, 0, 0, true);
        }
        if (event.contentOffset.y >= INPUT_SEARCH_HEIGHT / 2 && event.contentOffset.y <= INPUT_SEARCH_HEIGHT) {
          scrollTo(flatListRef, 0, INPUT_SEARCH_HEIGHT, true);
        }
      },
    },
    [],
  );

  const renderItem = React.useCallback(({ item, index }: any) => {
    return <ConversationItem item={item} />;
  }, []);

  return (
    <Container>
      <Header />
      <SearchInput translationY={translationY} />
      <Animated.FlatList
        ref={flatListRef}
        style={[Layout.containerHPadding]}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        data={Array.from({ length: 20 }).map((_, index) => index)}
        renderItem={renderItem}
        bounces={true}
        contentContainerStyle={{ paddingTop: INPUT_SEARCH_HEIGHT + HEADER_HEIGHT + scale(18) }}
        keyExtractor={item => item.toString()}
      />
    </Container>
  );
};
