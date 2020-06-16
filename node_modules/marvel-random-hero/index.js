"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var axios = require('axios');

var md5 = require('md5');
/**
 * Provides a wrapper over the Marvel API. This allows getting a random hero/comic each time you call it 
 * (between 1 and 1493).
 * @param {String} apiKey Key to user Marvel API -> https://developer.marvel.com/
 */


var marvelrandomhero = function marvelrandomhero(publicKey, privateKey) {
  // Endpoint in marvel API app
  var endpoint = 'https://gateway.marvel.com:443/v1/public/characters'; // Check credentials passed as parameters

  if (typeof publicKey !== 'string' || typeof privateKey !== 'string') {
    throw new TypeError('Marvel API requires an api key');
  } // Creates the hash information for later calls


  var auth = {
    ts: String(Date.now()),
    publicKey: publicKey,
    privateKey: privateKey,
    hash: ''
  };
  auth.hash = md5(auth.ts + auth.privateKey + auth.publicKey); // Initial limit o heros

  var limitCharacters = 1000; // Returns an object with the functionality provided by this wrapper

  return {
    /**
     * Returns a random character each time you call
     */
    randomCharacter: function randomCharacter() {
      var random, response, aux;
      return _regenerator["default"].async(function randomCharacter$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Number between 0 and limitCharacters -1
              random = Math.floor(Math.random() * (limitCharacters - 1)); // Get random character and returns JSON information

              _context.next = 3;
              return _regenerator["default"].awrap(axios({
                url: "".concat(endpoint, "?limit=1&offset=").concat(random, "&ts=").concat(auth.ts, "&apikey=").concat(auth.publicKey, "&hash=").concat(auth.hash),
                method: 'get'
              }));

            case 3:
              response = _context.sent;

              if (!(response.status === 200)) {
                _context.next = 8;
                break;
              }

              // Adjust limit of characters
              limitCharacters = response.data.data.total; // Create result

              aux = response.data.data.results[0];
              return _context.abrupt("return", {
                id: aux.id,
                name: aux.name,
                description: aux.description,
                thumbnail: "".concat(aux.thumbnail.path, "/standard_large.jpg"),
                date: aux.modified
              });

            case 8:
              return _context.abrupt("return", null);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  };
};

module.exports = marvelrandomhero;