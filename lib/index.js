'use strict';

require('isomorphic-fetch');

var Client = require('./client.js');
module.exports = function(bookMark, options) {
  return new Client(bookMark, options);
};
