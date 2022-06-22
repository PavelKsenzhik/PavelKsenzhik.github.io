import TaskForm from './task-form';
import ActiveTasks from './active-tasks'
import DoneTasks from './done-tasks';

import './tasks.css'


function Tasks() {
    console.log(typeof(42.1))
    return (
        <div className='tasks'>
            <TaskForm />
            <div className='tasks__wrapper'>
                <ActiveTasks />
                <DoneTasks />
            </div>
        </div>
    )
}


export default Tasks;