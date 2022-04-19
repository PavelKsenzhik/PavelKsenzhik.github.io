import { connect } from 'react-redux';
import { delTask, doneTask } from '../../../redux/actions';
import { activeTasksListSelector } from '../../../redux/selectors';

import Task from '../task'

function ActiveTasks({ tasks, onChange, del }) {

    return (
        <div>
            {tasks.map(task => (
                <Task 
                    key={task.id} 
                    task={task} 
                    onChange={() => onChange(task)}
                    del={() => del(task)}
                /> 
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks: activeTasksListSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (task) => dispatch(doneTask(task)),
    del: (task) => dispatch(delTask(task)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ActiveTasks);