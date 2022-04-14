import TaskForm from './task-form';
import ActiveTasks from './active-tasks'
import DoneTasks from './done-tasks';

import styles from './tasks.module.css'

function Tasks() {
    return (
        <div className={styles._wrapper}>
            <TaskForm />
            <ActiveTasks />
            <DoneTasks />
        </div>
    )
}


export default Tasks;