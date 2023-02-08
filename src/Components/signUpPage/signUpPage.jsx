import { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';
import styles from './signUp.module.sass'

export default function SignUpPage() {
    const navigate = useNavigate()
    
    const schema = yup.object({
        firstName: yup.string().required('Firstname must be required').matches(/^[A-Z][a-z]+$/, "Only letters").max(10, 'Not more than 10 letters'),
        lastName: yup.string().required('Lastname must be required').matches(/^[A-Z][a-z]+$/, "Only letters").max(10, 'Not more than 10 letters'),
        nickname: yup.string().required('Nickname must be required').matches(/^[A-Z][a-z]+$/, "Only letters").max(10, 'Not more than 10 letters'),
        phoneNumber: yup.string().required('Phone number must be required').matches(/^\d+$/, "Only numbers").max(10, 'Not more than 10 numbers'),
        position: yup.string().required('Position must be required').matches(/^[A-Z][a-z]+$/, "Only letters").max(10, 'Not more than 10 letters'),
        description: yup.string().required('Description must be required').max(20, 'Not more than 20 letters'),
        email: yup.string().required('Lastname must be required').email('Must be email formate'),
        password: yup.string().required('Description must be required').max(10, 'Not more than 10 letters')
    }).required()

    const {setFocus, reset, register, handleSubmit, formState, formState: { errors }} = useForm({resolver: yupResolver(schema)})
    
    const sendData = async (data) => {

        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        
        if (response.ok) {
            navigate("/main")
        }
    }

    useEffect( () => {
        if (formState.isSubmitSuccessful) {
            reset()
        }
    })
    
    useEffect(() => {
        setFocus('firstName')
    }, [setFocus])

    return(
        <div className={styles.container}>
            <h1>Join in the name web site</h1>
            <form className={styles.form} onSubmit={handleSubmit(sendData)}>
                <input className={styles.input} placeholder='Firstname' type='text' {...register('firstName')}></input>
                <p className={styles.error}>{errors.firstName?.message}</p>
                <input className={styles.input} placeholder='Lastname' type='text' {...register('lastName')}></input>
                <p className={styles.error}>{errors.lastName?.message}</p>
                <input className={styles.input} placeholder='Nickname' type='text' {...register('nickname')}></input>
                <p className={styles.error}>{errors.nickName?.message}</p>
                <input className={styles.input} placeholder='Phone number' type='text' {...register('phoneNumber')}></input>
                <p className={styles.error}>{errors.phoneNumber?.message}</p>
                <input className={styles.input} placeholder='Position' type='text' {...register('position')}></input>
                <p className={styles.error}>{errors.position?.message}</p>
                <input className={styles.input} placeholder='Description' type='text' {...register('description')}></input>
                <p className={styles.error}>{errors.description?.message}</p>
                <input className={styles.input} placeholder='Email' type='text' {...register('email')}></input>
                <p className={styles.error}>{errors.email?.message}</p>
                <input className={styles.input} placeholder='Password' type='password' {...register('password')}></input>
                <p className={styles.error}>{errors.password?.message}</p>
                <button className={styles.button} type='submit'>Registrate</button>
            </form>
        </div>
    )

}