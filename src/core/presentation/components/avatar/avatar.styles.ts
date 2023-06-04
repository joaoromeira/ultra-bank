import { StyleSheet } from 'react-native';

import { theme } from '../../themes/theme';

export const sizes = StyleSheet.create({
  small: {
    height: 48,
    width: 48,
    borderRadius: 48,
  },
  normal: {
    height: 64,
    width: 64,
    borderRadius: 50,
  },
  big: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
});

export const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.gray,
  },
});
