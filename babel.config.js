module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        [
          'react-native-unistyles/plugin',
          {
            debug: true // will help to debug
          }
        ]
    ]
  }
}
