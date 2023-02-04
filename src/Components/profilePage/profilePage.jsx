import {Fragment, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getUserData} from '../../slices/getUserSlice'
import LoadingPage from '../loadingPage/loadingPage'
import GoodPage from './fulfilledPage'

export default function ProfilePage() {
    const dispatch = useDispatch()
    const currentToken = useSelector(state => state.token.value)
    const status = useSelector(state => state.getUser.status)
    const userData = useSelector(state => state.getUser.userData[0])
    useEffect( () => {
        if (status === 'idle') {
            dispatch(getUserData(currentToken))
        }
    }, [dispatch, currentToken, status])
    console.log(userData)

    
    return(
    <Fragment>
        {userData ? <GoodPage /> : <LoadingPage />}
    </Fragment>
    )
}