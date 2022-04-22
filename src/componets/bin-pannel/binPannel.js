import { connect } from 'react-redux';

import { ReactComponent as BinIcon } from '../../icons/bin.svg';

import './binPannel.css';

function BinPannel() {

    return (
        <div className='bin-pannel _anim-items'>
            <BinIcon className='bin-pannel__icon'/>
            <p className='bin-pannel__text'>Recicle Bin</p>
        </div>
    )
}

export default connect()(BinPannel);