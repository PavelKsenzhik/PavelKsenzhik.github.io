import { connect } from 'react-redux';
import { delTask, doneTask } from '../../../redux/actions';
import { activeTasksListSelector } from '../../../redux/selectors';

import Task from '../../task'

function ActiveTasks({ filterCondition ,tasks, onCheckbox, onDel }) {
    console.log(filterCondition);
    
    return (
        <div>
            {tasks
            .filter((task) => {
                console.log(task.date);
                return task.date >= filterCondition.startDate && task.date <= filterCondition.endDate
            })
            .map(task => (
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