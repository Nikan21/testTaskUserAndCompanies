import { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { updateCompanyData } from '../../slices/companiesSlice';
import styles from './updateCompanyPage.module.sass'

export default function UpdateCompanyPage() {
    const params = useParams();
    const companyId = +params.id
    const company = useSelector(state => state.getCompanies.companiesData[0]).find(company => company.id === companyId)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState(company.name)
    const [address, setAddress] = useState(company.address)
    const [serviceOfActivity, setServiceOfActivity] = useState(company.serviceOfActivity)
    const [numberOfEmployess, setNumberOfEmployess] = useState(company.numberOfEmployess)
    const [description, setDescription] = useState(company.description)
    const [type, setType] = useState(company.type)

    const onNameChange = e => setName(e.target.value)
    const onAddressChange = e => setAddress(e.target.value)
    const onServiceOfActivityChange = e => setServiceOfActivity(e.target.value)
    const onNumberOfEmployessChange = e => setNumberOfEmployess(e.target.value)
    const onDescriptionChange = e => setDescription(e.target.value)
    const onTypeChange = e => setType(e.target.value)

    const onSaveUpdatedData = () => {
        const updatedData = {
            name: name,
            address: address,
            serviceOfActivity: serviceOfActivity,
            numberOfEmployess: numberOfEmployess,
            description: description,
            type: type,
        }
        const arrayData = [params.id, updatedData]

        dispatch(updateCompanyData(arrayData))
            
        navigate(`/company/${companyId}`)
    }

    return(
        <Fragment>
        <h1 className={styles.headSentence}>Update your company information</h1>
        <form className={styles.form}>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="name">Name:</label>
            <input className={styles.input} type="text" id="name" name="name" value={name} onChange={onNameChange} />
            </div>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="address">Address:</label>
            <input className={styles.input} type="text" id="address" name="address" value={address} onChange={onAddressChange} />
            </div>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="serviceOfActivity">Service of activity:</label>
            <input className={styles.input} type="text" id="serviceOfActivity" name="serviceOfActivity" value={serviceOfActivity} onChange={onServiceOfActivityChange} />
            </div>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="numberOfEmployess">Number of employees:</label>
            <input className={styles.input} type="text" id="numberOfEmployess" name="numberOfEmployess" value={numberOfEmployess} onChange={onNumberOfEmployessChange} />
            </div>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="description">Description:</label>
            <input className={styles.input} type="text" id="description" name="description" value={description} onChange={onDescriptionChange} />
            </div>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="type">Type:</label>
            <input className={styles.input} type="text" id="type" name="type" value={type} onChange={onTypeChange} />
            </div>
        </form>
        <button className={styles.button} type="button" onClick={onSaveUpdatedData}>
            Save changes
        </button>
        </Fragment>
    )
}