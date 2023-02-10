import {Fragment, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getUserData} from '../../slices/userSlice'
import LoadingPage from '../loadingPage/loadingPage'
import ProfilePage from './profilePage'

export default function FulfilledProfilePage() {
    const dispatch = useDispatch()
    const status = useSelector(state => state.getUser.statusGet)
    const userData = useSelector(state => state.getUser.userData[0])
    const updatedUserData = useSelector(state => state.getUser.updatedUserData[0])

    console.log(userData)
    console.log(updatedUserData)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getUserData())
        }
    }, [dispatch, status])

    useEffect(() => {
        if (JSON.stringify(userData) !== JSON.stringify(updatedUserData) && updatedUserData) {
            dispatch(getUserData())
        }
    }, [dispatch, userData, updatedUserData])

    return(
    <Fragment>
        {userData ? <ProfilePage /> : <LoadingPage />}
    </Fragment>
    )
}