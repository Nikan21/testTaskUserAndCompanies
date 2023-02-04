import { Fragment } from "react"
import Header from "../Header/header"
import styles from './mainPage.module.sass'


export default function MainPage() {
    return (
        <Fragment>
            <Header />
            <section className={styles.sentencesWrapper}>
            <h1 className={styles.firstSentence}>We are glad to see you here</h1>
            <p className={styles.secondSentence}>This is main page in the name web site</p>
            <p className={styles.thirdSentence}>Pick sections on top</p>
            </section>
        </Fragment>
    )
}