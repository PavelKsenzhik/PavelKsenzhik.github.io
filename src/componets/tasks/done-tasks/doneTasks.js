import { useMemo } from 'react';
import { connect } from 'react-redux';
import { addTask, delTask } from '../../../redux/actions';
import { doneTasksListSelector } from '../../../redux/selectors';

import Task from '../task'

function DoneTasks({ tasks, onChange, del }) {
    return (
        <div>
            <p>Done Tasks</p>
            {tasks.map(task => 
            <Task 
                key={task.id} 
                task={task} 
                onChange={() => onChange(task)}
                del={() => del(task.id)}
            />  
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks:  doneTasksListSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (task) => dispatch(addTask(task)),
    del: (taskId) => dispatch(delTask(taskId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DoneTasks);