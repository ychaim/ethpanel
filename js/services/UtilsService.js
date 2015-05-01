var web3 = require('web3');
var moment = require('moment');

var Utils = {
  fromWei: web3.fromWei,

  prettyHash: function(hash) {
    return hash.slice(2, 34);
  },

  prettyTime: function(timestamp) {
    return moment.unix(timestamp).format("HH:mm:ss");
  }
};

module.exports = Utils;
