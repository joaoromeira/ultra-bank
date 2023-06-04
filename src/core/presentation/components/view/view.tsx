import {
  background,
  BackgroundColor,
} from '@src/core/presentation/themes/background/background';
import {
  Spaces,
  makeSpaces,
} from '@src/core/presentation/themes/spaces/make-spaces';
import { View as RnView, ViewProps as RnViewProps } from 'react-native';

interface ViewProps extends RnViewProps, Spaces {
  bgColor?: BackgroundColor;
}

export const View = ({
  bgColor = 'transparent',
  style,
  ...props
}: ViewProps) => {
  const { spaceStyle } = makeSpaces(props);

  return <RnView style={[style, spaceStyle, background[bgColor]]} {...props} />;
};
