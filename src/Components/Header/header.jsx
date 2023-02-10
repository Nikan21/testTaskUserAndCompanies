import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { logOut } from '../../slices/userSlice'
import styles from './header.module.sass'

export default function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogOut = () => {
        dispatch(logOut())
        navigate('/anonym')
    }

    return (
        <div className={styles.headerWrapper}>
            <Link className={styles.link} to='/profile'>Profile</Link>
            <Link className={styles.link} to='/companies'>Companies</Link>
            <Link className={styles.link} to='/createcompany'>Create company</Link>
            <Link className={styles.link} onClick={onLogOut} to='/anonym'>Log out</Link>
        </div>
    )
}