import {
  background,
  BackgroundColor,
} from '@src/core/presentation/themes/background/background';
import {
  Spaces,
  makeSpaces,
} from '@src/core/presentation/themes/spaces/make-spaces';
import {
  SafeAreaView as RnSafeAreaView,
  SafeAreaViewProps as RnSafeAreaViewProps,
} from 'react-native-safe-area-context';

interface SafeAreaViewProps extends RnSafeAreaViewProps, Spaces {
  bgColor?: BackgroundColor;
}

export const SafeAreaView = ({
  bgColor = 'transparent',
  ...props
}: SafeAreaViewProps) => {
  const { spaceStyle } = makeSpaces(props);

  return (
    <RnSafeAreaView style={[spaceStyle, background[bgColor]]} {...props} />
  );
};
