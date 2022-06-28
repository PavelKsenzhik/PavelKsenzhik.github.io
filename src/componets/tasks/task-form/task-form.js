import { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../../redux/actions';
import Moment from 'react-moment';

import useForm from '../../../hooks/use-form';

import Calendar from '../../calendar';

import { ReactComponent as CalIcon } from '../../../icons/calendar.svg';

import styles from './task-form.module.css'

const INITIAL_STATE = { text: '', }

const TaskForm = ({ onSubmit }) => {

    const { values, handlers, reset } = useForm(INITIAL_STATE);
    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.text === '') {
            alert('Write something')
            return
        }

        // DEV ONLY
        values.id = Math.random();
        values.date = Date.parse(selectedDay);
        onSubmit(values);
        setVisCal(false);
        reset();
    }

    const [visCal, setVisCal] = useState(false);
    const [selectedDay, setSelectedDay] = useState(new Date());

    return (
        <div className={styles._wrapper}>
            <form className={styles._form} onSubmit={handleSubmit}>
                <input 
                    className={styles._input}
                    type='text'
                    placeholder='Write your task here'
                    onClick={() => setVisCal(false)}
                    {...handlers.text}>
                </input>
                <div className={styles._dateWrapper}>
                    <CalIcon 
                    className={styles._calendarIcon} 
                    onClick={() => setVisCal(!visCal)}
                    />
                    {visCal ? 
                        <div className={styles._calendarWrapper}>
                            <p className={styles._closeBtn} onClick={() => setVisCal(!visCal)}>Close Daypicker</p>
                            <Calendar
                                selectedDay={selectedDay}
                                onSelect={setSelectedDay}
                            />
                            
                        </div> 
                        : null
                    }
                    <p className={styles._dateText}>Task for <Moment date={selectedDay} format='ddd, D MMM'/></p>
                </div>

                <button className={styles._btn} type='submit'>Add task</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values) => {
        dispatch(addTask(values))
    },
});

export default connect(null, mapDispatchToProps)(TaskForm);
