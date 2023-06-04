import { StyleSheet } from 'react-native';

import { theme } from '../../themes/theme';

export const typography = StyleSheet.create({
  caption: {
    fontSize: 11,
  },
  caption2: {
    fontSize: 12,
  },
  body: {
    fontSize: 16,
  },
  headline: {
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    fontSize: 20,
  },
  title2: {
    fontSize: 22,
  },
  title3: {
    fontSize: 28,
  },
  'large-title': {
    fontSize: 34,
  },
});

export const colors = StyleSheet.create({
  black: {
    color: theme.colors.black,
  },
  white: {
    color: theme.colors.white,
  },
  gray: {
    color: theme.colors.gray,
  },
  gray2: {
    color: theme.colors.gray2,
  },
  gray3: {
    color: theme.colors.gray3,
  },
  gray4: {
    color: theme.colors.gray4,
  },
  gray5: {
    color: theme.colors.gray5,
  },
  gray6: {
    color: theme.colors.gray6,
  },
  green: {
    color: theme.colors.green,
  },
  red: {
    color: theme.colors.red,
  },
});
