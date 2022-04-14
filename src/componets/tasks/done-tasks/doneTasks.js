import { useMemo } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../../redux/actions';
import { doneTasksIdSelector, doneTasksListSelector } from '../../../redux/selectors';

import Task from '../task'

function DoneTasks({ tasks, onChange }) {
    return (
        <div>
            <p>Done Tasks</p>
            {tasks.map(task => 
            <Task key={task.id} task={task} onChange={() => onChange(task)}/>  
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks:  doneTasksListSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (task) => dispatch(addTask(task)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DoneTasks);