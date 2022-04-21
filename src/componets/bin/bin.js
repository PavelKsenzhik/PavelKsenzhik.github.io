import { connect } from 'react-redux';

import { ReactComponent as BinIcon } from '../../icons/bin.svg';

import './bin.css';

function Bin() {

    return (
        <div className='bin'>
            <BinIcon className='bin__icon'/>
            <p>Recicle Bin</p>
        </div>
    )
}

export default connect()(Bin);