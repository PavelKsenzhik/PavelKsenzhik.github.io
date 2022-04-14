import { connect } from 'react-redux';
import { activeTaskSelector } from '../../../../redux/selectors';
import { useState } from 'react';

import Checkbox from '../../../checkbox';

import styles from './task.module.css';
import { doneTask } from '../../../../redux/actions';

function Task({ task, onChange }) {
    const { text, checked  } = task;
    
    return (
        <div className={styles._wrapper}>
            <div className={styles._text_container}>
                <label className={styles._label}>
                <Checkbox 
                checked={checked}
                onChange={() => onChange(task)}
                />   
                <span className={styles._text}>{text}</span>
                </label>
            </div>
            <div className={styles._pannel}>
                <button className={styles._btn}>Delete</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    task: activeTaskSelector(state, props)
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (task) => dispatch(doneTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(Task);