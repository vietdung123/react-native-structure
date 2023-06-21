import React from 'react';
import { StyleSheet } from 'react-native';
import { RootNavigator } from '@/Navigators';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { store } from '@/Stores';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <RootNavigator />
      </GestureHandlerRootView>
    </Provider>
  );
};
