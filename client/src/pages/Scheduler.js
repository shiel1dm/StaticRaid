import React from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'

function Scheduler() {

    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2021-11-4T12:00:00")
    )

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    return (
        <div className='date'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify='space-around'>
                <KeyboardDatePicker 
                disableToolbar
                variant='inline'
                format='MM/dd/yyyy'
                margin='normal'
                id='date-picker'
                label='Date Pickervalue'
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date'
                }}
                />

                <KeyboardTimePicker 
                margin='normal'
                id='time-picker'
                label='Time Picker'
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date'
                }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
        </div>
    )
}

export default Scheduler
