import { Colors, DarkColors } from './Colors';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
// import { getDarkImages, getImages } from '@/Assets/Images';
export const getAppTheme = () => ({
  default: {
    Colors,
    Images: {},
    NavigationTheme: DefaultTheme,
  },
  dark: {
    Colors: DarkColors,
    Images: {},
    NavigationTheme: DarkTheme,
  },
});
