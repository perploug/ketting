'use strict';

// The NewPromise function is a factory method and returns a regular old
// Promise object.
var NewPromise = function(res, rej) {

  // The inner promise
  var realPromise = new Promise(res, rej);

  // Adding some functions
  realPromise.follow = function(rel) {

    return this.then(function(resource) {
      return resource.follow(rel);
    });

  };

  realPromise.followAll = function(rel) {

    return this.then(function(resource) {
      return resource.followAll(rel);
    });

  };

  return realPromise;

};

module.exports = NewPromise;
