import { DayPicker } from 'react-day-picker';


function Calendar({ selectedDay, onSelect }) {
    return (
            <div>
                <DayPicker 
                mode="single"
                weekStartsOn={1}
                selected={selectedDay}
                onSelect={onSelect}
                fromDate={new Date()}
                defaultMonth={selectedDay}
                />
            </div>

    )
}

export default Calendar;