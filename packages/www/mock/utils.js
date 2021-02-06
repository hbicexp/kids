/**
 * @description 获得本机IP
 * @returns {String} IP
 */
function getIPAdress() {
  var interfaces = require('os').networkInterfaces()
  for (let devName in interfaces) {
    let iface = interfaces[devName]
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i]
      if (
        alias.family === 'IPv4' &&
        alias.address !== '127.0.0.1' &&
        alias.address !== '172.27.80.1' &&
        !alias.internal
      ) {
        return alias.address
      }
    }
  }

  return '127.0.0.1'
}

/**
 * @description 处理所有失败返回值。
 * @param {String} code error code
 * @param {String} msg error msg
 * @param {Object} data handle data
 * @returns {Object} handle result
 */
// eslint-disable-next-line no-unused-vars
function handleErrorResponse(code, msg, data) {
  return {
    code,
    msg,
    data,
  }
}

/**
 * @description 处理所有成功返回值。
 * @param {Object} data handle data
 * @returns {Object} handle result
 */
function handleSuccessResponse(data) {
  return {
    code: 200,
    msg: 'success',
    data,
  }
}

module.exports = {
  getIPAdress,
  handleErrorResponse,
  handleSuccessResponse,
}
