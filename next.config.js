const path = require('path')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const { fullEnvironment } = require('./lib/environment')

const basePath = process.env.BASE_PATH;
const assetPrefix = process.env.ASSET_PREFIX;

const ENV = fullEnvironment()

// Defined by Next
delete ENV.NODE_ENV

module.exports = withCSS(
  withFonts(
    withImages({
      webpack(config, options) {
        return ['lib', 'components'].reduce((config, dirname) => {
          config.resolve.alias[dirname] = path.join(__dirname, dirname)
          return config
        }, config)
      },
      env: ENV,
      devIndicators: {
        autoPrerender: false,
      },
      basePath: !!basePath ? basePath : '',
      assetPrefix: !!assetPrefix ? assetPrefix : '',
    })
  ),
)
