const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictmode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  },
});


// webpack.config.js:
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  // Other webpack configs...
  plugins: [
    // Other plugins...
    new GenerateSW({
      // option: 'value',
    })
  ]
};