import {
  Spaces,
  makeSpaces,
} from '@src/core/presentation/themes/spaces/make-spaces';
import { Image, ImageProps } from 'react-native';

import { styles, sizes } from './avatar.styles';
type Sizes = keyof typeof sizes;

interface AvatarProps extends ImageProps, Spaces {
  size?: Sizes;
}

export const Avatar = ({ size = 'normal', ...props }: AvatarProps) => {
  const { spaceStyle } = makeSpaces(props);

  return <Image style={[spaceStyle, styles.root, sizes[size]]} {...props} />;
};
