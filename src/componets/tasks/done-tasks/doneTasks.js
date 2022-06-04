import { connect } from 'react-redux';
import { addTask, delTask } from '../../../redux/actions';
import { doneTasksListSelector } from '../../../redux/selectors';

import Task from '../../task'

import styles from './doneTasks.module.css'

function DoneTasks({ tasks, onCheckbox, onDel }) {

    if(tasks.length === 0) return (
        <div></div>
    )

    return (
        <div>
            <p className={styles._title}>Done Tasks</p>
            {tasks.map(task => 
            <Task 
                key={task.id} 
                task={task} 
                onCheckbox={() => onCheckbox(task)}
                onDel={() => onDel(task)}
            />  
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks:  doneTasksListSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
    onCheckbox: (task) => dispatch(addTask(task)),
    onDel: (task) => dispatch(delTask(task)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DoneTasks);