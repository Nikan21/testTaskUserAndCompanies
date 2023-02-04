import {Fragment} from 'react'
import {useSelector} from 'react-redux'
import Header from '../Header/header'
import styles from './profile.module.sass'

export default function ProfilePage() {
    const userData = useSelector(state => state.getUser.userData[0])
    
    return(
    <Fragment>
        <Header />
        <section className={styles.wrapperProfile}>
        <h1 className={styles.nickname}>Profile: {userData.nickname}</h1>
        <p className={styles.otherData}>Full name: {userData.firstName} {userData.lastName}</p>
        <p className={styles.otherData}>Phone number: {userData.phoneNumber}</p>
        <p className={styles.otherData}>Position: {userData.position}</p>
        <p className={styles.otherData}>Description: {userData.description}</p>
        <p className={styles.otherData}>Email: {userData.email}</p>
        <button className={styles.button}>Update information</button>
        </section>
    </Fragment>
    )
}