import TaskForm from './task-form';
import ActiveTasks from './active-tasks'
import DoneTasks from './done-tasks';

import './tasks.css'

import { useSearchParams } from 'react-router-dom';

function Tasks() {
    const [searchParams, setSearchParams] = useSearchParams();
    const todayDate = Date.now();
    const filterCondition = {
        startDate: new Date(todayDate).setDate(new Date(todayDate).getDate() - 1),
        endDate: 5555555555555555555,
    }

    const dateQuery = searchParams.get('date') || '';
    switch(dateQuery){
        case 'tomorrow': 
            filterCondition.endDate =  new Date(todayDate).setDate(new Date(todayDate).getDate() + 2)
            break;
        case 'week':
            filterCondition.endDate = new Date(todayDate).setDate(new Date(todayDate).getDate() + 7);
            break;
    }
    console.log(dateQuery);
    console.log(filterCondition);
    return (
        <div className='tasks'>
            <TaskForm />
            <div className='tasks__wrapper'>
                <ActiveTasks filterCondition={filterCondition}/>
                <DoneTasks filterCondition={filterCondition}/>
            </div>
        </div>
    )
}


export default Tasks;