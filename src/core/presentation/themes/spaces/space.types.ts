import { Colors } from '../theme';

export interface PaddingArgs {
  p?: number;
  py?: number;
  px?: number;
  pt?: number;
  pl?: number;
  pr?: number;
  pb?: number;
}

export interface MarginArgs {
  m?: number;
  my?: number;
  mx?: number;
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
}

export interface RnPadding {
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
}

export interface RnMargin {
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
}

type FlexAlignType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';

export interface SizeArgs {
  height?: number | string;
  width?: number | string;
}

export interface FlexArgs {
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';
  alignItems?: FlexAlignType;
  alignSelf?: 'auto' | FlexAlignType;
  flex?: number;
  flexBasis?: number | string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  rowGap?: number;
  gap?: number;
  columnGap?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

export interface BorderArgs {
  borderBottomColor?: Colors | undefined;
  borderBottomEndRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomStartRadius?: number;
  borderBottomWidth?: number;
  borderColor?: Colors | undefined;
  borderEndColor?: Colors | undefined;
  borderLeftColor?: Colors | undefined;
  borderLeftWidth?: number;
  borderRightColor?: Colors | undefined;
  borderRightWidth?: number;
  borderStartColor?: Colors | undefined;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  borderTopColor?: Colors | undefined;
  borderTopEndRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderTopStartRadius?: number;
  borderTopWidth?: number;
  borderWidth?: number;
  borderRadius?: number;
}
