import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'ultra-bank',
  description: 'ultra-bank',
  slug: 'ultra-bank',
  scheme: 'ultra-bank',
  version: '1.0.0',
  packagerOpts: {
    sourceExts: ["js", "json", "ts", "tsx", "jsx"]
  },
  orientation: 'portrait',
  icon: './src/assets/icon.png',
  userInterfaceStyle: 'automatic',
  updates: {
    enabled: true,
  },
  assetBundlePatterns: ['./src/assets/*'],
  splash: {
    image: './src/assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    supportsTablet: false,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
});
