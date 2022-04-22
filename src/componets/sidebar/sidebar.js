import { connect } from 'react-redux';


import { ReactComponent as TodayIcon } from '../../icons/today.svg';
import { ReactComponent as TomorrowIcon } from '../../icons/tomorrow.svg'
import { ReactComponent as WeekIcon } from '../../icons/week.svg'
import BinPannel from '../bin-pannel';

import './sidebar.css'

function Sidebar() {

    return (
        <div className='sidebar _anim-items'>
            <ul className='sidebar__list' >
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
            </ul>
            <BinPannel />
        </div>
    )
}

const mapStateToProps = () => ({

})


export default connect(mapStateToProps)(Sidebar);