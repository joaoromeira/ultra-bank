export const theme = {
  spaces: 4, // make space do 1*4=4, 2*4=8
  colors: {
    white: '#fff',
    black: '#000',
    gray: '#8E8E94',
    gray2: '#636467',
    gray3: '#48484A',
    gray4: '#3A3A3C',
    gray5: '#2C2C2E',
    gray6: '#1C1C1E',
    green: '#68C95A',
    red: '#ED4F2C',
  },
};

export type Colors = keyof typeof theme.colors;
