import { Colors } from '@core/presentation/themes/theme';
import { makeSpaces } from '@src/core/presentation/themes/spaces/make-spaces';
import { Text as RnText, TextProps as RnTextProps } from 'react-native';

import { MarginArgs, PaddingArgs } from '../../themes/spaces/space.types';
import { colors, typography } from './text.styles';

type Variant = keyof typeof typography;

type Spacing = PaddingArgs & MarginArgs;

interface TextProps extends RnTextProps, Spacing {
  variant?: Variant;
  color?: Colors;
}

export const Text = ({
  color = 'white',
  variant = 'body',
  ...props
}: TextProps) => {
  const { spaceStyle } = makeSpaces(props, true);

  return (
    <RnText
      style={[spaceStyle, typography[variant], colors[color]]}
      {...props}
    />
  );
};
