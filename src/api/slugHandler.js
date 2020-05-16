// keep node.js syntax as this function is used both by client and node
const _ = require('lodash')

module.exports = slugHandler = (language, templateKey, slug) => {

  if (language === 'de') {
    return _.kebabCase(slug).length === 0 ? '/de/' : `/de/${_.kebabCase(slug)}/`
  } else {
    return _.kebabCase(slug).length === 0 ? '/' : `/${_.kebabCase(slug)}/`
  }
}
