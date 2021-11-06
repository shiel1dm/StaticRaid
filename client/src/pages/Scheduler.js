import React from 'react'
import Nylas from 'nylas';

Nylas.config((
    clientId : 'aq4yv5s2t1b56q5y2vn3dph9a',
    clientSecret: '37t2flhoxx4uo5b6qsw581v7',
));

const nylas = Nylas.with(UgFNbppUjTuzNArfDtB5THVeIJpIvU);
nylas.events
.count()
.then(count => {
    console.log(
        
    )
})

export default Scheduler
