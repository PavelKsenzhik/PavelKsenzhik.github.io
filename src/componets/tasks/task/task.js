import { connect } from 'react-redux';

import Checkbox from '../../checkbox';

import styles from './task.module.css';

function Task({ task, onChange }) {
    const { text, checked } = task;
    return (
        <div className={styles._wrapper}>
            <div className={styles._text_container}>
                <label className={styles._label}>
                <Checkbox 
                checked={checked}
                onChange={onChange}
                />   
                </label>
                <span className={styles._text}>{text}</span>
            </div>
            <div className={styles._pannel}>
                <button className={styles._btn}>Delete</button>
            </div>
        </div>
    )
}



export default Task;