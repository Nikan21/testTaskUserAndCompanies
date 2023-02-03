import { Link } from 'react-router-dom'
import styles from './anonym.module.sass'

export default function AnotherPage() {
    return(
        <div className={styles.container}>
            <h1 className={styles.firstSentence}>Wellcome to the name web site</h1>
            <div className={styles.buttonWrapper}>
                <Link className={styles.linkSign} to='/signin'>SignIn</Link>
                <Link className={styles.linkSign} to='/signup'>SignUp</Link>
            </div>
        </div>
    )
}