import { connect } from 'react-redux';
import moment from 'moment';
import { DayPicker } from 'react-day-picker';


function Calendar({ selectedDay, onSelect }) {
    return (
            <DayPicker 
            mode="single"
            weekStartsOn={1}
            selected={selectedDay}
            onSelect={onSelect}
            fromDate={new Date()}
            defaultMonth={selectedDay}
            />
    )
}

export default Calendar;