module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          '@common': './src/app/common',
          '@components': './src/app/components',
          '@config': './src/app/config',
          '@const': './src/app/constants',
          '@screens': './src/app/modules',
          '@theme': './src/app/theme',
          '@assets': './src/assets',
          '@contexts': './src/core/contexts',
          '@hooks': './src/core/hooks',
          '@models': './src/core/models',
          '@redux': './src/core/redux',
          '@schemas': './src/core/schemas',
          '@services': './src/core/services',
          '@utils': './src/core/utils',
          '@vendors': './src/core/vendors',
        },
      },
    ],
    'inline-dotenv',
    'react-native-reanimated/plugin', // needs to be last
  ],
};
