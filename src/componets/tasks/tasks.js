import TaskForm from './task-form';
import ActiveTasks from './active-tasks'
import DoneTasks from './done-tasks';


function Tasks() {
    return (
        <div className='tasks'>
            <TaskForm />
            <ActiveTasks />
            <DoneTasks />
        </div>
    )
}


export default Tasks;