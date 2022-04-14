import { connect } from 'react-redux';
import { doneTasksIdSelector } from '../../../redux/selectors';

import Task from './task'

function DoneTasks({ doneTasks  }) {
    return (
        <div>
            <p>Done Tasks</p>
            {doneTasks.map(id => <Task key={id} id={id}/>)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    doneTasks: doneTasksIdSelector(state)
})

export default connect(mapStateToProps)(DoneTasks);