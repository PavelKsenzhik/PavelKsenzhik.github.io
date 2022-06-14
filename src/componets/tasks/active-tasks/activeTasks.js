import { connect } from 'react-redux';
import { delTask, doneTask } from '../../../redux/actions';
import { activeTasksListSelector } from '../../../redux/selectors';

import Task from '../../task'

function ActiveTasks({ tasks, onCheckbox, onDel }) {
    
    return (
        <div>
            {tasks.map(task => (
                <Task 
                    key={task.id} 
                    task={task} 
                    onCheckbox={() => onCheckbox(task)}
                    onDel={() => onDel(task)}
                /> 
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks: activeTasksListSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    onCheckbox: (task) => dispatch(doneTask(task)),
    onDel: (task) => dispatch(delTask(task)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ActiveTasks);