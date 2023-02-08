import {Fragment, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getUserData} from '../../slices/getUserSlice'
import LoadingPage from '../loadingPage/loadingPage'
import GoodPage from './fulfilledPage'

export default function ProfilePage() {
    const dispatch = useDispatch()
    const status = useSelector(state => state.getUser.status)
    const userData = useSelector(state => state.getUser.userData[0])
    console.log(userData)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getUserData())
        }
    }, [dispatch, status])

    return(
    <Fragment>
        {userData ? <GoodPage /> : <LoadingPage />}
    </Fragment>
    )
}