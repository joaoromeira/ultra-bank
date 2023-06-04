import {
  Spaces,
  makeSpaces,
} from '@src/core/presentation/themes/spaces/make-spaces';
import {
  Pressable as RnPressable,
  PressableProps as RnPressableProps,
} from 'react-native';

type PressableProps = RnPressableProps & Spaces;

export const Pressable = (props: PressableProps) => {
  const { spaceStyle } = makeSpaces(props);

  return <RnPressable style={[spaceStyle]} {...props} />;
};
