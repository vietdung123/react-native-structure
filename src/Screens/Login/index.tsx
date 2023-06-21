import React, { Text, View } from 'react-native';
import { styles } from './Login.style';
import { ILoginProps } from './Login.prop';

export const Login = (props: ILoginProps) => {
  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
    </View>
  );
};
