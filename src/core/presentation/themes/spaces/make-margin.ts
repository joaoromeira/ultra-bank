import { theme } from '../../themes/theme';
import { MarginArgs, RnMargin } from './space.types';

export const makeMargin = ({
  m = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  mt = 0,
  my = 0,
  mx = 0,
}: MarginArgs): RnMargin => {
  const { spaces } = theme;

  if (mx || my) {
    return {
      marginBottom: spaces * (my || mb),
      marginLeft: spaces * (mx || ml),
      marginRight: spaces * (mx || mr),
      marginTop: spaces * (my || mt),
    };
  }

  if (m) {
    return {
      marginBottom: spaces * m,
      marginLeft: spaces * m,
      marginRight: spaces * m,
      marginTop: spaces * m,
    };
  }

  return {
    marginBottom: spaces * mb,
    marginLeft: spaces * ml,
    marginRight: spaces * mr,
    marginTop: spaces * mt,
  };
};
