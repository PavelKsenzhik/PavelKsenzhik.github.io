import { connect } from 'react-redux';


import { ReactComponent as TodayIcon } from '../../icons/today.svg';
import { ReactComponent as TomorrowIcon } from '../../icons/tomorrow.svg'
import { ReactComponent as WeekIcon } from '../../icons/week.svg'
import Bin from '../bin';

import './dataManager.css'

function Sidebar() {

    return (
        <div className='wrapper'>
            <ul className='list' >
                <li className='item _anim-items'>
                    <TodayIcon className='item-icon'/>
                    <p className='item-text'>Today</p>
                </li>
                <li className='item _anim-items'>
                    <TomorrowIcon className='item-icon'/>
                    <p className='item-text'>Tomorrow</p>
                </li>
                <li className='item _anim-items'>
                    <WeekIcon className='item-icon'/>
                    <p className='item-text'>Week</p>
                </li>
            </ul>
            <Bin />
        </div>
    )
}

const mapStateToProps = () => ({

})


export default connect(mapStateToProps)(Sidebar);