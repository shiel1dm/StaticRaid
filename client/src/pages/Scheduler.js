import React from 'react';
import Nylas from 'nylas';
import Button from '@mui/material/Button';

Nylas.config((
    clientId: 'aq4yv5s2t1b56q5y2vn3dph9a',
    clientSecret: '37t2flhoxx4uo5b6qsw581v7,
));

const nylas = Nylas.with(UgFNbppUjTuzNArfDtB5THVeIJpIvU);

const event = nylas.events.count()
.then(count => {
    console.log(event);
});

export default Scheduler

//===Below is the code referenced for the above code

/*const Nylas = require('nylas');

Nylas.config({
    clientId: <CLIENT_ID>,
    clientSecret: <CLIENT_SECRET>,
});

const nylas = Nylas.with(<ACCESS_TOKEN>);

const event = nylas.events.build({
    title: 'New Years Party!',
    // calendarID must be the ID for a calendar the user has write access to.
    calendarId: <CALENDAR_ID>,
    // Event times use UTC timestamps
    // This example creates an event on December 31, 2018
    when: { start_time: 1546290000, end_time: 1546300800 },

    // Participants are stored as an array of participant subobjects
    participants: [{ email: 'swag@nylas.com', name: 'My Nylas Friend' }],
    location: 'My House!'
});

// Event notification emails are not sent by default
// Enable notify_participants to send an email notification to participants
event.save({ notify_participants: true }).then(event => {
    console.log(event);
});*/

//=======Below is the button that needs to be converted/translated
//====As well as the call to display the modal

/*
<Button 
id="schedule-editor"
> 
Launch Scheduler
</Button>


var btn = document.getElementById('schedule-editor');
btn.addEventListener('click', function() {
        nylas.scheduler.show({
        auth: {
        // Account <ACCESS_TOKEN> with active calendar scope
            accessToken: "UgFNbppUjTuzNArfDtB5THVeIJpIvU", 
        },
        style: {
        // Style the schdule editor
            tintColor: '#32325d',
            backgroundColor: 'white',
        },
        defaults: {
            event: {
                title: '30-min Coffee Meeting',
                duration: 30,
            },
        },
    });
});*/



