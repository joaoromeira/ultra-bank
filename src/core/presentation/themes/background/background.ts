import { StyleSheet } from 'react-native';

import { theme } from '../theme';

export const background = StyleSheet.create({
  transparent: {
    backgroundColor: undefined,
  },
  black: {
    backgroundColor: theme.colors.black,
  },
  white: {
    backgroundColor: theme.colors.white,
  },
  gray: {
    backgroundColor: theme.colors.gray,
  },
  gray2: {
    backgroundColor: theme.colors.gray2,
  },
  gray3: {
    backgroundColor: theme.colors.gray3,
  },
  gray4: {
    backgroundColor: theme.colors.gray4,
  },
  gray5: {
    backgroundColor: theme.colors.gray5,
  },
  gray6: {
    backgroundColor: theme.colors.gray6,
  },
});

export type BackgroundColor = keyof typeof background;
