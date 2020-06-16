# marvel-random-hero

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A simple interface around the [Marvel Comics API](http://developer.marvel.com/documentation/getting_started), which returns random hero every time you call it.

[demo](https://marvel-random-hero-demo.herokuapp.com/) - [source](https://github.com/IsmaelB83/marvel-random-hero-demo)

## Motivation

This module has been created for the advanced backend course (node.js), of Keepcoding full stack web development bootcamp.

## Install

```sh
npm install marvel-random-hero --save
```

## Example

```js
// Import module
const marvel = require ('marvel-random-hero');

// Initializes de module
const { randomCharacter } = marvel('xxx_public_key', 'yyy_private_key');

// Get random character
randomCharacter()
.then(character => console.log(character))
.catch(error => console.log(error));
```

## Usage

To initialize the module you need to pass the public and private keys received while registering in [Marvel Comics API](http://developer.marvel.com/). With this information,
this module generates the hash required by Marvel API
```js
// Creates the hash information for later calls
const auth = {
    ts: String(Date.now()),
    public: public,
    private: private,
    hash: ''
}
auth.hash = md5(auth.ts + auth.private + auth.public);
```

Later calls to randomCharacter will not pass your private key over the internet. Marvel API requires only sending the original timestamp (use to generate the md5 hash), the
public key and the hash:
```js
// Get random character and returns JSON information
// being endpoint: https://gateway.marvel.com:443/v1/public/characters
response = await axios({
    url: `${endpoint}?limit=1&offset=${random}&ts=${auth.ts}&apikey=${auth.public}&hash=${auth.hash}`,
    method: 'get'
})
```