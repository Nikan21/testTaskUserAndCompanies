import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import Header from '../Header/header'
import styles from './companies.module.sass'

export default function CompaniesPage() {
    const companiesData = useSelector(state => state.getCompanies.companiesData[0])
    
    const renderedCompanies = companiesData.map(company => (
        <tr key={company.id}>
            <td>{company.name}</td>
            <td>{company.serviceOfActivity}</td>
            <td><Link className={styles.link} to={`/company/${company.id}`} >See more</Link></td>
        </tr>
    ))

    return(
        <Fragment>
        <Header/>
        <section className={styles.section}>
        <h1 className={styles.headerSentence}>Your companies</h1>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Service of activity</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {renderedCompanies}
            </tbody>
        </table>
        </section>
        </Fragment>
    )

}