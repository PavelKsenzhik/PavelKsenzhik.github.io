import Moment from 'react-moment';

import Checkbox from '../checkbox';

import styles from './task.module.css';

function Task({ task, onChange, del }) {
    const { text, checked, date } = task;
    return (
        <div className={styles._wrapper}>
            <div className={styles._info_container}>
                <div className={styles._checkbox_body}>
                    <label className={styles._label}>
                    <Checkbox 
                    checked={checked}
                    onChange={onChange}
                    />   
                    </label>
                </div>
                <div className={styles._text_body}>
                    <span className={styles._text}>{text}</span>
                    <Moment className={styles._date} date={date} format='ddd, D MMM'/>
                </div>
            </div>
            <div className={styles._pannel}>
                <button className={styles._btn} onClick={del} >Delete</button>
            </div>
            
        </div>
    )
}



export default Task;