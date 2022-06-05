import { useState } from 'react'
import { connect } from 'react-redux';
import { addTask } from '../../../redux/actions';

import { ReactComponent as CalIcon } from '../../../icons/calendar.svg';

import useForm from '../../../hooks/use-form';

import Calendar from '../../calendar';

import styles from './task-form.module.css'

const INITIAL_STATE = { text: '', }

const TaskForm = ({ onSubmit }) => {
    const [visCal, setVisCal] = useState(false);
    const { values, handlers, reset } = useForm(INITIAL_STATE);

    const handleCalendar = () => setVisCal(!visCal);
    console.log(visCal);    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.text === '') {
            alert('Write something')
            return
        }
        onSubmit(values, Math.random(), Date.parse(new Date()));
        reset();
    }

    return (
        <div className={styles._wrapper}>
            <form className={styles._form} onSubmit={handleSubmit}>
                <input 
                className={styles._input}
                type='text'
                placeholder='Write your task here'
                {...handlers.text}></input>
                <CalIcon className={styles._calendarIcon} onClick={handleCalendar}/>
                {visCal ? <div className={styles._calendarWrapper}><Calendar /></div> : <div></div>}
                <button className={styles._btn} type='submit'>Add task</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (values, taskId, date) => {
        dispatch(addTask(values, taskId, date))
    },
});

export default connect(null, mapDispatchToProps)(TaskForm);
