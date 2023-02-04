import {Link} from 'react-router-dom'
import styles from './header.module.sass'

export default function Header() {
    return (
        <div className={styles.headerWrapper}>
            <Link className={styles.link} to='/profile'>Profile</Link>
            <Link className={styles.link} to='/companies'>Companies</Link>
            <Link className={styles.link} to='/createcompany'>Create company</Link>
            <Link className={styles.link} to='/logout'>Log out</Link>
        </div>
    )
}