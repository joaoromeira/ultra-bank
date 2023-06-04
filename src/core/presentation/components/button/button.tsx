import {
  Spaces,
  makeSpaces,
} from '@src/core/presentation/themes/spaces/make-spaces';
import { Pressable, PressableProps, Text } from 'react-native';

import { styles } from './button.styles';

interface ButtonProps extends PressableProps, Spaces {
  title: string;
}

export const Button = ({ title, ...props }: ButtonProps) => {
  const { spaceStyle } = makeSpaces(props);

  return (
    <Pressable style={[spaceStyle, styles.root]} {...props}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
