import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as TasksIcon } from '../../icons/tasks.svg'
import { ReactComponent as TodayIcon } from '../../icons/today.svg';
import { ReactComponent as TomorrowIcon } from '../../icons/tomorrow.svg'
import { ReactComponent as WeekIcon } from '../../icons/week.svg'
import { ReactComponent as BinIcon } from '../../icons/bin.svg';

import './sidebar.css'
import { activeTasksListSelector, binTasksListSelector } from '../../redux/selectors';

function Sidebar({ tasks, tasksOnBin }) {

    const startDate = new Date().setHours(0,0,0,0);
    const countTasks = {
        today: null,
        tomorrow: null,
        week: null,
        all: null,
        bin: null,
    }

    tasks.forEach(( {date} ) => {
        ++countTasks.all;
        if( date <  startDate + 86400000 ){
            ++countTasks.today;
            ++countTasks.week;
        } else if( date > startDate + 86400000 - 1 && date < startDate + 86400000 * 2 ) {
            ++countTasks.tomorrow;
            ++countTasks.week;
        } else if( date < startDate + 86400000 * 7 ) {
            ++countTasks.week;
        }
    });

    tasksOnBin.forEach(() => ++countTasks.bin)

    return (
        <div className='sidebar _anim-items'>
            <ul className='sidebar__list' >
                    <Link to="/main?date=today">
                        <li className='sidebar__item _anim-items'>
                            <TodayIcon className='sidebar__item-icon'/>
                            <p className='sidebar__item-text'>Today</p>
                            <div className='sidebar__item-count'>{countTasks.today}</div>
                        </li>
                    </Link>
                    <Link to="/main?date=tomorrow">
                        <li className='sidebar__item _anim-items'>
                            <TomorrowIcon className='sidebar__item-icon'/>
                            <p className='sidebar__item-text'>Tomorrow</p>
                            <div className='sidebar__item-count'>{countTasks.tomorrow}</div>
                        </li>
                    </Link>
                    <Link to="/main?date=week">
                        <li className='sidebar__item _anim-items'>
                            <WeekIcon className='sidebar__item-icon'/>
                            <p className='sidebar__item-text'>Week</p>
                            <div className='sidebar__item-count'>{countTasks.week}</div>
                        </li>
                    </Link>
                    <Link to="/main">
                        <li className='sidebar__item _anim-items'>
                            <TasksIcon className='sidebar__item-icon'/>
                            <p className='sidebar__item-text'>All tasks</p>
                            <div className='sidebar__item-count'>{countTasks.all}</div>
                        </li>
                    </Link>
            </ul>
            <Link to="/bin">
                <div className='bin-pannel _anim-items' >
                    <BinIcon className='bin-pannel__icon'/>
                    <p className='bin-pannel__text'>Recicle Bin</p>
                    <div className='bin-pannel__count'>{countTasks.bin}</div>
                </div>
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks: activeTasksListSelector(state),
    tasksOnBin: binTasksListSelector(state),
})


export default connect(mapStateToProps)(Sidebar);