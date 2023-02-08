import { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';
import styles from './signIn.module.sass'

export default function SignInPage() {
    const navigate = useNavigate()

    const schema = yup.object({
        email: yup.string().required('Lastname must be required').email('Must be email formate'),
        password: yup.string().required('Description must be required').matches(/^[A-Z][a-z]+$/, "Only letters").max(10, 'Not more than 10 letters')
    }).required()

    const {setFocus, reset, register, handleSubmit, formState, formState: { errors }} = useForm({resolver: yupResolver(schema)})

    const sendData = async (data) => {
        
        const response = await fetch('http://localhost:5000/signin', {
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
        setFocus('email')
    }, [setFocus])

    return(
        <div className={styles.container}>
            <h1>Join in the name web site</h1>
            <form className={styles.form} onSubmit={handleSubmit(sendData)}>
                <input className={styles.input} placeholder='Email' type='text' {...register('email')}></input>
                <p className={styles.error}>{errors.email?.message}</p>
                <input className={styles.input} placeholder='Password' type='password' {...register('password')}></input>
                <p className={styles.error}>{errors.password?.message}</p>
                <button className={styles.button} type='submit'>Registrate</button>
            </form>
        </div>
    )
}