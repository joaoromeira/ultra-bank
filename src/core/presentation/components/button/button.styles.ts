import { StyleSheet } from 'react-native';

import { theme } from '../../themes/theme';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 4,
    backgroundColor: theme.colors.white,
  },
  text: {
    color: theme.colors.black,
  },
});
