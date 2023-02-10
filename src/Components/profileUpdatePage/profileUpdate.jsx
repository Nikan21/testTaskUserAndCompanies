import { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { updateUserData } from '../../slices/userSlice'
import styles from './profileUpdate.module.sass'

export default function ProfileUpdatePage() {
    const userData = useSelector(state => state.getUser.userData[0])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState(userData.firstName)
    const [lastName, setLastName] = useState(userData.lastName)
    const [nickname, setNickname] = useState(userData.nickname)
    const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber)
    const [position, setPosition] = useState(userData.position)
    const [description, setDescription] = useState(userData.description)
    const [email, setEmail] = useState(userData.email)
    const [password, setPassword] = useState('')

    const onFirstNameChange = e => setFirstName(e.target.value)
    const onLastNameChange = e => setLastName(e.target.value)
    const onNicknameChange = e => setNickname(e.target.value)
    const onPhoneNumberChange = e => setPhoneNumber(e.target.value)
    const onPositionChange = e => setPosition(e.target.value)
    const onDescriptionChange = e => setDescription(e.target.value)
    const onEmailChange = e => setEmail(e.target.value)
    const onPasswordChange = e => setPassword(e.target.value)

    const onSaveUpdatedData = () => {
        const updatedData = {
            firstName: firstName,
            lastName: lastName,
            nickname: nickname,
            phoneNumber: phoneNumber,
            position: position,
            description: description,
            email: email,
            password: password
        }

        dispatch(updateUserData(updatedData))
            
        navigate("/profile")
    }

    return(
        <Fragment>
        <h1 className={styles.headSetence}>Update your information</h1>
        <form className={styles.form}>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="firstName">First name:</label>
            <input className={styles.input} type="text" id="firstName" name="firstName" value={firstName} onChange={onFirstNameChange} />
            </div>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="lastName">Last name:</label>
            <input className={styles.input} type="text" id="lastName" name="lastName" value={lastName} onChange={onLastNameChange} />
            </div>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="nickname">Nickname:</label>
            <input className={styles.input} type="text" id="nickname" name="nickname" value={nickname} onChange={onNicknameChange} />
            </div>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="phoneNumber">Phone number:</label>
            <input className={styles.input} type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={onPhoneNumberChange} />
            </div>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="position">Position:</label>
            <input className={styles.input} type="text" id="position" name="position" value={position} onChange={onPositionChange} />
            </div>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="description">Description:</label>
            <input className={styles.input} type="text" id="description" name="description" value={description} onChange={onDescriptionChange} />
            </div>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="email">Email:</label>
            <input className={styles.input} type="text" id="email" name="email" value={email} onChange={onEmailChange} />
            </div>
            <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="password">Password:</label>
            <input className={styles.input} type="text" id="password" name="password" value={password} onChange={onPasswordChange} />
            </div>
        </form>
        <button className={styles.button} type="button" onClick={onSaveUpdatedData}>
            Save changes
        </button>
        </Fragment>
    )

}