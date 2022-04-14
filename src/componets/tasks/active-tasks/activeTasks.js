import { connect } from 'react-redux';
import { activeTasksIdSelector } from '../../../redux/selectors';

import Task from './task'

function ActiveTasks({ tasks }) {

    return (
        <div>
            {tasks.map((id) => (
                <Task key={id} id={id}/> 
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks: activeTasksIdSelector(state),
})


export default connect(mapStateToProps)(ActiveTasks);