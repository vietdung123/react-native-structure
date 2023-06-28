import { AddConversationSvg, CameraSvg } from '@/Assets/Svgs';
import AppText from '@/Components/AppText';
import Padding from '@/Components/Padding';
import Row from '@/Components/Row';
import { useAppTheme } from '@/Hooks';
import { Layout, ResponsiveStyleSheet } from '@/Theme';
import React from 'react';
import { Image, View } from 'react-native';
import { HEADER_HEIGHT } from '.';

export const Header = ({ title, onPressBack }: any) => {
  const { Colors } = useAppTheme();

  const styleColorAppTheme = React.useMemo(
    () => ({
      bgHeader: {
        backgroundColor: Colors.background,
        height: HEADER_HEIGHT,
        zIndex: 1,
        top: 0,
      },
      bgColorIcon: {
        backgroundColor: Colors.bgColorIconHeader,
      },
    }),
    [Colors],
  );

  return (
    <Row
      style={[Layout.containerHPadding, Layout.absolute, Layout.fullWidth, styleColorAppTheme.bgHeader]}
      align="center"
      justify="space-between">
      <Row>
        <Image source={require('@/Assets/Images/DefaultAvatar.png')} style={styles.avt} />
        <Padding left={12} />
        <AppText fontSize={38} fontWeight={700} color={Colors.textHeader}>
          Chats
        </AppText>
      </Row>
      <Row>
        <View style={[styles.bgIcon, styleColorAppTheme.bgColorIcon]}>
          <CameraSvg size={20} color={Colors.whiteAndBlack} />
        </View>
        <Padding left={12} />
        <View style={[styles.bgIcon, styleColorAppTheme.bgColorIcon]}>
          <AddConversationSvg size={20} color={Colors.whiteAndBlack} />
        </View>
      </Row>
    </Row>
  );
};

const styles = ResponsiveStyleSheet.create({
  avt: {
    width: 40,
    height: 40,
  },
  bgIcon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
