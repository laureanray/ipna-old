const got = require('got');

const clientV1 = got.extend({
    prefixUrl: 'https://ipna.herokuapp.com/v1',
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: 'json'
});

module.exports = { clientV1 }
