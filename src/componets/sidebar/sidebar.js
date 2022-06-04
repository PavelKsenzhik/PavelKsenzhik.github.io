import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { ReactComponent as TodayIcon } from '../../icons/today.svg';
import { ReactComponent as TomorrowIcon } from '../../icons/tomorrow.svg'
import { ReactComponent as WeekIcon } from '../../icons/week.svg'
import { ReactComponent as BinIcon } from '../../icons/bin.svg';

import './sidebar.css'

function Sidebar() {

    return (
        <div className='sidebar _anim-items'>
            <ul className='sidebar__list' >
                <Link to="/tasks">
                    <li className='sidebar__item _anim-items'>
                        <TodayIcon className='sidebar__item-icon'/>
                        <p className='sidebar__item-text'>Today</p>
                    </li>
                    <li className='sidebar__item _anim-items'>
                        <TomorrowIcon className='sidebar__item-icon'/>
                        <p className='sidebar__item-text'>Tomorrow</p>
                    </li>
                    <li className='sidebar__item _anim-items'>
                        <WeekIcon className='sidebar__item-icon'/>
                        <p className='sidebar__item-text'>Week</p>
                    </li>
                </Link>
            </ul>
            <Link to="/bin">
                <div className='bin-pannel _anim-items' >
                    <BinIcon className='bin-pannel__icon'/>
                    <p className='bin-pannel__text'>Recicle Bin</p>
                </div>
            </Link>
        </div>
    )
}

const mapStateToProps = () => ({

})


export default connect(mapStateToProps)(Sidebar);