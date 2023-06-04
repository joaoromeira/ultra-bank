import { StyleSheet } from 'react-native';

import { theme } from '../theme';
import { makeMargin } from './make-margin';
import { makePadding } from './make-padding';
import {
  BorderArgs,
  FlexArgs,
  MarginArgs,
  PaddingArgs,
  SizeArgs,
} from './space.types';

export type Spaces = PaddingArgs &
  MarginArgs &
  FlexArgs &
  SizeArgs &
  BorderArgs;

export const makeSpaces = (spaceArgs: Spaces, isTextComponent = false) => {
  const {
    gap = 0,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    p,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
    borderColor,
    borderEndColor,
    borderTopColor,
    borderLeftColor,
    borderRightColor,
    borderStartColor,
    borderBottomColor,
    ...args
  } = spaceArgs;

  const padding = makePadding({ p, pb, pl, pr, pt, px, py });
  const margin = makeMargin({ m, mb, ml, mr, mt, mx, my });

  let border = {};
  if (!isTextComponent) {
    border = {
      borderColor: borderColor && theme.colors[borderColor],
      borderEndColor: borderEndColor && theme.colors[borderEndColor],
      borderTopColor: borderTopColor && theme.colors[borderTopColor],
      borderLeftColor: borderLeftColor && theme.colors[borderLeftColor],
      borderRightColor: borderRightColor && theme.colors[borderRightColor],
      borderStartColor: borderStartColor && theme.colors[borderStartColor],
      borderBottomColor: borderBottomColor && theme.colors[borderBottomColor],
    };
  }

  return StyleSheet.create({
    spaceStyle: {
      ...padding,
      ...margin,
      ...args,
      ...border,
      gap: gap * theme.spaces,
    },
  });
};
