// JS Goes here - ES6 supported

// Say hello
console.log("🦊 meow!");

const Instafeed = require("./instafeed.js");
const userFeed = new Instafeed({
    get: 'user',
    userId: '3523664885',
    clientId: 'e32bd9b1f0c64d10b4bf114facbe4b92',
    resolution: 'thumbnail',
    limit: '12',
    accessToken: '3523664885.1677ed0.e10f00a4e9e342f09d38c15095bbe844'

});
userFeed.run();


var client = algoliasearch("HRBO4CU3NQ", "72dc5eb31124694164a13ea54d64d115");
var index = client.initIndex('olive_mango');
