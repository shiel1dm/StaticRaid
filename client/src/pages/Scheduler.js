import React from 'react';
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'
import { ClassNames } from '@emotion/react';


function Scheduler() {
    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2021-11-7T12:00:00")
    )

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    return (
        <div ClassName='Schedule'>
        <MuiPickersUtilsProvider utils={DatefnsUtils}>
        <Grid container justify='space-around'>
            <KeyboardDatePicker
                disableToolbar
                variant='inline'
                format='MM/dd/yyy'
                id='date-picker'
                label='Date'
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria label': 'create date'
                }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
        </div>
        
    );

}

export default Scheduler;