import { connect } from 'react-redux';
import { addTask, doneTask } from '../../../../redux/actions';
import { doneTaskSelector } from '../../../../redux/selectors';

import Checkbox from '../../../checkbox';

import styles from './task.module.css';

function Task({ task, onChange }) {
    const { text, checked } = task;
    
    return (
        <div className={styles._wrapper}>
            <div className={styles._text_container}>
                <label className={styles._label}>
                <Checkbox 
                checked={checked}
                onChange={() => onChange(task)}
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

const mapStateToProps = (state, props) => ({
    task: doneTaskSelector(state, props)
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (task) => dispatch(addTask(task, task.id )),
})

export default connect(mapStateToProps, mapDispatchToProps)(Task);