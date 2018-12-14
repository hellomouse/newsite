const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withManifest = require('next-manifest');

module.exports = withSass(withCss(withManifest({
  manifest: {
    icons: {
      src: 'assets/pwa-icon.png',
      cache: true
    }
  }
})));
