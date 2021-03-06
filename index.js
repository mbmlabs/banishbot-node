"use-strict";

// Helper Library for BanishBot API.
// For help and assistance please go to: https://www.banishbot.com
var request = require('request');
var Q = require('q');

config = {
  baseURL: 'https://api.banishbot.com',
  baseVersion: '29-02-2018'
}

module.exports = {
  // Check BanishBot to see if an object has been banished or not.
  checkBanishment: function(username, apiKey, banishItem, pii, callback){
    var deferred = Q.defer();
    var method = 'GET';

    if(pii == true){
      // Assemble the URL Request
      var url = config.baseURL+'/'+config.baseVersion+'/'+encodeURI(username)+'/pii';
      var options = {
        url: url,
        method: method,
        headers: {
          'User-Agent': 'nodeSDK',
          'x-api-key': apiKey,
          'x-pii': banishItem
        }
      };
    } else {
      // Assemble the URL Request
      var url = config.baseURL+'/'+config.baseVersion+'/'+encodeURI(username)+'/'+encodeURI(banishItem);
      var options = {
        url: url,
        method: method,
        headers: {
          'User-Agent': 'nodeSDK',
          'x-api-key': apiKey
        }
      };
    }

    function httpCallback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var body = JSON.parse(body)
        deferred.resolve(body.body);
      } else {
        deferred.reject(error);
      }
    }
    request(options, httpCallback);
    deferred.promise.nodeify(callback);
    return deferred.promise;
  },

  // Banish a new Item to BanishBot, this may or maynot include a notes payload
  banishNewItem: function(username, apiKey, banishItem, banishPayload, pii, callback){
    var deferred = Q.defer();
    var method = 'POST';

    if(!banishPayload){
      banishPayload = {
        banished: true
      };
    }

    if(pii == true){
      // Assemble the URL Request
      var url = config.baseURL+'/'+config.baseVersion+'/'+encodeURI(username)+'/pii';
      var options = {
        url: url,
        method: method,
        headers: {
          'User-Agent': 'nodeSDK',
          'x-api-key': apiKey,
          'x-pii': banishItem
        }
      };
    } else {
      // Assemble the URL Request
      var url = config.baseURL+'/'+config.baseVersion+'/'+encodeURI(username)+'/'+encodeURI(banishItem);
      var options = {
        url: url,
        method: method,
        headers: {
          'User-Agent': 'nodeSDK',
          'x-api-key': apiKey
        }
      };
    }


    function httpCallback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var body = JSON.parse(body)
        deferred.resolve(body);
      } else {
        deferred.reject(error);
      }
    }
    request(options, httpCallback);
    deferred.promise.nodeify(callback);
    return deferred.promise;
  },

  // Update Banished Item, this may involve updating the banished state, user notes or type of banished object
  updateBanishedItem: function(username, apiKey, banishItem, banishPayload, pii, callback){
    var deferred = Q.defer();
    var method = 'PUT';

    if(!banishPayload['banished']){
      banishPayload = {
      };
    }

    if(pii == true){
      // Assemble the URL Request
      var url = config.baseURL+'/'+config.baseVersion+'/'+encodeURI(username)+'/pii';
      var options = {
        url: url,
        method: method,
        headers: {
          'User-Agent': 'nodeSDK',
          'x-api-key': apiKey,
          'x-pii': banishItem
        }
      };
    } else {
      // Assemble the URL Request
      var url = config.baseURL+'/'+config.baseVersion+'/'+encodeURI(username)+'/'+encodeURI(banishItem);
      var options = {
        url: url,
        method: method,
        headers: {
          'User-Agent': 'nodeSDK',
          'x-api-key': apiKey
        }
      };
    }

    function httpCallback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var body = JSON.parse(body)
        deferred.resolve(body);
      } else {
        deferred.reject(error);
      }
    }
    request(options, httpCallback);
    deferred.promise.nodeify(callback);
    return deferred.promise;
  },

  // Delete an item from BanishBot, once this is actioned no record of it is kept on BanishBot servers.
  deleteItemFromBanishBot: function(username, apiKey, banishItem, pii, callback){
    var deferred = Q.defer();
    var method = 'DELETE';

    if(pii == true){
      // Assemble the URL Request
      var url = config.baseURL+'/'+config.baseVersion+'/'+encodeURI(username)+'/pii';
      var options = {
        url: url,
        method: method,
        headers: {
          'User-Agent': 'nodeSDK',
          'x-api-key': apiKey,
          'x-pii': banishItem
        }
      };
    } else {
      // Assemble the URL Request
      var url = config.baseURL+'/'+config.baseVersion+'/'+encodeURI(username)+'/'+encodeURI(banishItem);
      var options = {
        url: url,
        method: method,
        headers: {
          'User-Agent': 'nodeSDK',
          'x-api-key': apiKey
        }
      };
    }

    function httpCallback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var body = JSON.parse(body)
        deferred.resolve(body);
      } else {
        deferred.reject(error);
      }
    }
    request(options, httpCallback);
    deferred.promise.nodeify(callback);
    return deferred.promise;
  }

};
