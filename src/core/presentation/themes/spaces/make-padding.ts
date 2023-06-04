import { theme } from '../../themes/theme';
import { PaddingArgs, RnPadding } from './space.types';

export const makePadding = ({
  p = 0,
  pb = 0,
  pl = 0,
  pr = 0,
  pt = 0,
  px = 0,
  py = 0,
}: PaddingArgs): RnPadding => {
  const { spaces } = theme;

  if (px || py) {
    return {
      paddingBottom: spaces * (py || pb),
      paddingLeft: spaces * (px || pl),
      paddingRight: spaces * (px || pr),
      paddingTop: spaces * (py || pt),
    };
  }

  if (p) {
    return {
      paddingBottom: spaces * p,
      paddingLeft: spaces * p,
      paddingRight: spaces * p,
      paddingTop: spaces * p,
    };
  }

  return {
    paddingBottom: spaces * pb,
    paddingLeft: spaces * pl,
    paddingRight: spaces * pr,
    paddingTop: spaces * pt,
  };
};
