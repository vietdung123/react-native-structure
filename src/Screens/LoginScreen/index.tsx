import React from 'react';
import { CommonColors, FontSizes, Layout, Spacing } from '@/Theme';
import Padding from '@/Components/Padding';
import { AppButton, AppInput, AppText, Box, Container } from '@/Components';
import useTranslation from '@/Hooks/useTranslation';
import { STORAGE_KEYS, storage } from '@/Storage';

interface ILoginProps {}

const LoginScreen = (props: ILoginProps) => {
  const trans = useTranslation();
  const signIn = () => {
    setTimeout(() => {
      storage.set(STORAGE_KEYS.TOKEN, 'token here')
    }, 1000);
  };
  return (
    <Container>
        <AppText fontSize={FontSizes.h2} fontWeight={400} align="center">
          {trans('auth.signIn')}
        </AppText>
        <Padding top={Spacing.xl} />
        <AppInput
          placeholder={trans('auth.email')}
        />
        <Padding top={Spacing.s} />
        <AppInput
          placeholder={trans('auth.password')}
          secureTextEntry
        />

        <Padding top={Spacing.xl} />

        <Box row align="center" justify="center">
          <AppButton
            text={trans('auth.signIn')}
            textSize={FontSizes.regular}
            onPress={signIn}
            textColor={CommonColors.mainDark}
          />
        </Box>
    </Container>
  );
};

export default React.memo(LoginScreen);
