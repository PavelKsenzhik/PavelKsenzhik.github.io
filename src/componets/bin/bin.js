import { connect } from 'react-redux';
import { restoreTask } from '../../redux/actions';
import { binTasksListSelector } from '../../redux/selectors';

import Task from '../task'

function Bin({ tasks, onCheckbox, onDel }) {
    
    if(tasks.length === 0) return <p className='bin-empty'>Bin is empty</p>
    
    return (
        <div className='bin'> 
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task} 
                    onCheckbox={() => onCheckbox(task)}
                    onDel={() => onDel(task)}
                    bin
                />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks: binTasksListSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    onCheckbox: (task) => '',
    onDel: (task) => dispatch(restoreTask(task)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Bin);