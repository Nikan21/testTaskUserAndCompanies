import { Fragment } from 'react';
import {useParams, Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Header from '../Header/header'
import styles from './company.module.sass'

export default function CompanyPage() {
    const params = useParams();
    const companyId = +params.id
    const company = useSelector(state => state.getCompanies.companiesData[0]).find(company => company.id === companyId)
    console.log(company)

    return(
        <Fragment>
            <Header/>
        <section>
            <h1 className={styles.name}>{company.name}</h1>
            <section className={styles.sectionInformation}>
            <div className={styles.infoWrapper}>
            <p className={styles.info}>Address: {company.address}</p>
            <p className={styles.info}>Service of activity: {company.serviceOfActivity}</p>
            <p className={styles.info}>Number of employees: {company.numberOfEmployess}</p>
            <p className={styles.info}>Description: {company.description}</p>
            <p className={styles.info}>Type: {company.type}</p>
            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.button}>Update information</button>
                <button className={styles.button}>Delete company</button>
            </div>
            </section>
            <div className={styles.backButtonWrapper}>
                <Link className={styles.button} to='/companies'>Back to companies</Link>
            </div>
        </section>
        </Fragment>
    )
}