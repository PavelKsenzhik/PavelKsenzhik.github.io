import { ReactComponent as Logo } from '../../icons/logo.svg';

import styles from './header.module.css';

function Header() {
    return(
        <div className={styles._wrapper}>
            <h1 className={styles._title}>Todo App</h1>
            <Logo className={styles._logo}/>
        </div>
    )
}

export default Header;