import Moment from 'react-moment';

import Checkbox from '../checkbox';

import styles from './task.module.css';

function Task({ task, onCheckbox, onDel, bin }) {
    const { text, checked, date } = task;
    console.log(date);
    const btnText = bin ? 'Restore' : 'Delete';
    return (
        <div className={styles._wrapper}>
            <div className={styles._info_container}>
                <div className={styles._checkbox_body}>
                    <label className={styles._label}>
                    <Checkbox 
                    checked={checked}
                    onChange={onCheckbox}
                    />   
                    </label>
                </div>
                <div className={styles._text_body}>
                    <span className={styles._text}>{text}</span>
                    <Moment className={styles._date} date={date} format='ddd, D MMM'/>
                </div>
            </div>
            <div className={styles._pannel}>
                <button className={styles._btn} onClick={onDel}>{btnText}</button>
            </div>
            
        </div>
    )
}



export default Task;