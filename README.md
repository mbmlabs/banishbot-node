# BanishBot

A NodeJS BanishBot helper library.

<h1><strong>BanishBot</strong></h1>  <p>BanishBot is a fast and simple API designed to help you, your teams and your organization manage opt-in, opt-out and access control lists.</p>  <p>Examples of items that can be 'banished' are:</p>  <ul>  <li>Telephone Numbers</li>  <li>Email Addresses</li>  <li>IP Addresses</li>  <li>Credit Card Numbers</li>  <li>Employee IDs</li> </ul>  <p><strong>You can use BanishBot in two ways:</strong></p>  <ol>  <li>A <strong>black</strong>listing tool that acts as a source of truth for your team / project / organization.</li>  <li>A <strong>white</strong>listing tool that acts as a source of truth for your team / project / organization.</li>

## Release Update
BanishBot is still in alpha phase with a closed registration.
This release provides access to the user/banishObject endpoints

Notes:
- API version: 0.0.1
- Package version: 0.0.3


## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To install via npm:

```shell
npm install banishbot --save
```

#### git
#
The library is hosted at:
https://github.com/mbmlabs/banishbot
you can install it via:

```shell
    npm install mbmlabs/banishbot --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.


## Getting Started

```javascript

var banishbot = require('banishbot');
var username = 'TheDoctor'; // Required
var apiKey = 'abc-123-Th1s-Is-My-K3y'; // Required

```

## Using Promises

Check if an item has been banished:

```javascript

banishbot.checkBanishment(username, apiKey, 'dalek@skaro.planet').then(function(result) {
  // Success Result
  console.log(result);
  // {"Banished":false,"BanishedItem":"dalek@skaro.planet"}
})
.fail(function (error) {
  // Error Something died, here is the response
  console.log(error);
});

```

Banish a new item:

```javascript

banishPayload = {
  banished: true // Required
  type: 'email' // This is optional
  notes: 'These are my optional notes' // This is optional
};
banishbot.banishNewItem(username, apiKey, 'dalek@skaro.planet', banishPayload).then(function(result) {
  // Success Result
  console.log(result);
  // { success: true, username: 'TheDoctor' }
  //{ statusCode: '409', body: { Reason: 'This item is already banished, please check the state of the item in a new request.' } }
})
.fail(function (error) {
  // Error Something died, here is the response
  console.log(error);
});

```

Update an existing item:

```javascript

banishPayload = {
  banished: true // Required
  notes: 'These are my optional notes' // This is optional
};
banishbot.updateBanishedItem(username, apiKey, 'dalek@skaro.planet', banishPayload).then(function(result) {
  // Success Result
  console.log(result);
  //{ success: true, username: 'TheDoctor' }
})
.fail(function (error) {
  // Error Something died, here is the response
  console.log(error);
});

```

Delete an item:

```javascript

banishbot.deleteItemFromBanishBot(username, apiKey, 'dalek@skaro.planet').then(function(result) {
  // Success Result
  console.log(result);
  //{"Success":true,"Message":"dalek@skaro.planet has been deleted","Username":"TheDoctor"}
})
.fail(function (error) {
  // Error Something died, here is the response
  console.log(error);
});

```

## Using Error first callback

Check if an item has been banished:

```javascript

banishbot.checkBanishment(username, apiKey, 'dalek@skaro.planet', function (error, result) {
  console.log(result);
  //{"Banished":false,"BanishedItem":"dalek@skaro.planet"}
});

```

Banish a new item:

```javascript

banishPayload = {
  banished: true // Required
  type: 'email' // This is optional
  notes: 'These are my optional notes' // This is optional
};
banishbot.banishNewItem(username, apiKey, 'dalek@skaro.planet', banishPayload, function (error, result) {
  console.log(result);
  //{ success: true, username: 'TheDoctor' }
  //{ statusCode: '409', body: { Reason: 'This item is already banished, please check the state of the item in a new request.' } }
});

```

Update an existing item:

```javascript

banishPayload = {
  banished: true // Required
  notes: 'These are my optional notes' // This is optional
};
banishbot.updateBanishedItem(username, apiKey, 'dalek@skaro.planet', banishPayload, function (error, result) {
  console.log(result);
  //{ success: true, username: 'TheDoctor' }
});

```

Delete an item:

```javascript

banishbot.deleteItemFromBanishBot(username, apiKey, 'dalek@skaro.planet', function (error, result) {
  console.log(result);
  //{"Success":true,"Message":"dalek@skaro.planet has been deleted","Username":"TheDoctor"}
});

```
