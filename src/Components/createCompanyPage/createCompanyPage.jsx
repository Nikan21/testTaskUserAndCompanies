import { Fragment, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';
import Header from '../Header/header'
import { useDispatch } from 'react-redux';
import { createCompany } from '../../slices/companiesSlice';
import styles from './createCompanyPage.module.sass'

export default function CreateCompanyPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const schema = yup.object({
        name: yup.string().required('Name must be required').matches(/^[A-Z][a-z]+$/, "Only letters").max(10, 'Not more than 10 letters'),
        address: yup.string().required('Address must be required').matches(/^[A-Z][a-z]+$/, "Only letters").max(10, 'Not more than 10 letters'),
        serviceOfActivity: yup.string().required('Service of activity must be required').matches(/^[A-Z][a-z]+$/, "Only letters").max(10, 'Not more than 10 letters'),
        numberOfEmployess: yup.string().required('Number of employess must be required').matches(/^\d+$/, "Only numbers").max(10, 'Not more than 10 letters'),
        description: yup.string().required('Description must be required').max(20, 'Not more than 20 letters'),
        type: yup.string().required('Type must be required').matches(/^[A-Z][a-z]+$/, "Only letters").max(10, 'Not more than 10 letters'),
    }).required()

    const {setFocus, reset, register, handleSubmit, formState, formState: { errors }} = useForm({resolver: yupResolver(schema)})
    
    const sendData = async (data) => {
        dispatch(createCompany(data))
        navigate("/companies")
    }

    useEffect( () => {
        if (formState.isSubmitSuccessful) {
            reset()
        }
    })
    
    useEffect(() => {
        setFocus('name')
    }, [setFocus])

    return (
        <Fragment>
            <Header />
            <div className={styles.container}>
            <h1>Create your company</h1>
            <form className={styles.form} onSubmit={handleSubmit(sendData)}>
                <input className={styles.input} placeholder='Name' type='text' {...register('name')}></input>
                <p className={styles.error}>{errors.name?.message}</p>
                <input className={styles.input} placeholder='Address' type='text' {...register('address')}></input>
                <p className={styles.error}>{errors.address?.message}</p>
                <input className={styles.input} placeholder='Service of activity' type='text' {...register('serviceOfActivity')}></input>
                <p className={styles.error}>{errors.serviceOfActivity?.message}</p>
                <input className={styles.input} placeholder='Number of employess' type='text' {...register('numberOfEmployess')}></input>
                <p className={styles.error}>{errors.numberOfEmployess?.message}</p>
                <input className={styles.input} placeholder='Description' type='text' {...register('description')}></input>
                <p className={styles.error}>{errors.description?.message}</p>
                <input className={styles.input} placeholder='Type' type='text' {...register('type')}></input>
                <p className={styles.error}>{errors.type?.message}</p>
                <button className={styles.button} type='submit'>Registrate</button>
            </form>
        </div>
        </Fragment>
    )
}
