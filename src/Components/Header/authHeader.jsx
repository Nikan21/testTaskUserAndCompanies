import styles from './authHeader.module.sass'

export default function authHeader() {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.profile}>Profile</div>
            <div className={styles.companies}>Companies</div>
            <div className={styles.createCompany}>Create company</div>
            <div className={styles.logOut}>Log out</div>
        </div>
    )
}