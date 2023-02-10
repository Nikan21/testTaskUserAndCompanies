import {Fragment, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getUserData} from '../../slices/userSlice'
import LoadingPage from '../loadingPage/loadingPage'
import ProfileUpdatePage from './profileUpdate'

export default function FulfilledProfileUpdatePage() {
    const dispatch = useDispatch()
    const status = useSelector(state => state.getUser.statusGet)
    const userData = useSelector(state => state.getUser.userData[0])

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getUserData())
        }
    }, [dispatch, status])

    return(
    <Fragment>
        {userData ? <ProfileUpdatePage /> : <LoadingPage />}
    </Fragment>
    )
}