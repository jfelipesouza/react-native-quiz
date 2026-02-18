module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@themes/*': './src/theme/*',
            '@types/*': './src/types/*',
          },
        },
      ],
      [
        'react-native-unistyles/plugin',
        {
          root: 'src',
        },
      ],
    ],
  };
};
