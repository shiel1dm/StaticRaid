const Nylas = require('nylas');

Nylas.config({
    clientId: aq4yv5s2t1b56q5y2vn3dph9a,
    clientSecret: U37t2flhoxx4uo5b6qsw581v7,
});

const nylas = Nylas.with(UgFNbppUjTuzNArfDtB5THVeIJpIvU);

nylas.account.get().then(account => console.log(account));
