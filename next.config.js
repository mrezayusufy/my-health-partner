const withImages = require('next-images')
const withReactSvg = require('next-react-svg')
const path = require('path')
module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/svgs'),
  webpack(config, options) {
    return config
  }
})