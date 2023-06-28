import AppText from '@/Components/AppText';
import Box from '@/Components/Box';
import Padding from '@/Components/Padding';
import Row from '@/Components/Row';
import { useAppTheme } from '@/Hooks';
import { ResponsiveStyleSheet } from '@/Theme';
import React from 'react';
import { Image } from 'react-native';

export const ConversationItem = ({ item, onPress }: any) => {
  const { Colors } = useAppTheme();

  return (
    <Padding vertical={8}>
      <Row>
        <Image source={require('@/Assets/Images/DefaultAvatar.png')} style={styles.avt} />
        <Padding left={12} />
        <Box>
          <AppText fontSize={17} fontWeight={500} color={Colors.whiteAndBlack}>
            Martin Randolph
          </AppText>
          <AppText fontSize={17} fontWeight={500} color={Colors.subTextConversationItem}>
            You: What’s man! · 9:40 AM
          </AppText>
        </Box>
      </Row>
    </Padding>
  );
};

const styles = ResponsiveStyleSheet.create({
  avt: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
});
