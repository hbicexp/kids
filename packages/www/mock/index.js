let controller = require('./controller.js')

const { getIPAdress } = require('./utils')

const proxy = {
  _proxy: {
    proxy: {
      '/(images|config)(.*)': 'http://192.168.6.103/',
      '/iptv/client/log/(.*)': 'http://' + getIPAdress() + ':8088/',
      '/iptv/client/(.*)': 'http://' + getIPAdress() + ':8088/',
    },
    changeOrigin: true,
    changeHost: true,
  },
  ...controller,
}

module.exports = proxy
