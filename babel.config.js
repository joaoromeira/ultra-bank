module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript', 'module:metro-react-native-babel-preset'],
    plugins: [      
      [
        'module-resolver',
        {         
          extensions: ['.js', '.jsx', '.ts', '.tsx'], 
          root: ['./'],
          alias: {            
            '@src': './src',
            '@core': './src/core',
          }
        },
      ],      
    ],
  };
};
