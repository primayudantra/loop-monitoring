var mongoist = require('mongoist')

module.exports = {
  __init : function(mongoUrl){
    return mongoist(mongoUrl,{})
  }
}
