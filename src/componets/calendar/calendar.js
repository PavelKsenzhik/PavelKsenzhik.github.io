import { connect } from 'react-redux';
import moment from 'moment';
import { DayPicker } from 'react-day-picker';


function Calendar({ }) {
    const now = new Date();
    return (
            <DayPicker 
            mode="single"
            selected={now}
            defaultMonth={now}
            />
    )
}

export default Calendar;