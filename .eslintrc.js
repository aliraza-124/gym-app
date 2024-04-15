// module.exports = {
//   root: true,
//   extends: '@react-native',

//   rules: {
//     'prettier/prettier': 'off',
//   },
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};