import { connect } from 'react-redux';

import { ReactComponent as BinIcon } from '../../icons/bin.svg';

import './binPannel.css';

function BinPannel() {

    return (
        <div className='bin _anim-items'>
            <BinIcon className='bin__icon'/>
            <p className='bin__text'>Recicle Bin</p>
        </div>
    )
}

export default connect()(BinPannel);