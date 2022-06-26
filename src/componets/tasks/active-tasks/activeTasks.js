import { connect } from 'react-redux';
import { delTask, doneTask } from '../../../redux/actions';
import { activeTasksListSelector } from '../../../redux/selectors';
import { useSearchParams } from 'react-router-dom'

import Task from '../../task'
import task from '../../task';

function ActiveTasks({ tasks, onCheckbox, onDel }) {

    const [searchParams ] = useSearchParams();
    const post = searchParams.get('date' || 0)

    const startDate = new Date().setHours(0,0,0,0);

    tasks = tasks.filter(({ date }) => {
        switch(post){
            case 'today':
                return date < startDate + 86400000 ;
            case 'tomorrow':
                return date > startDate + 86400000 - 1 && date < startDate + 86400000 * 2;
            case 'week':
                return date < startDate + 86400000 * 7;
            default:
                return task;
        }
    })

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