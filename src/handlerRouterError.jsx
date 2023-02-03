import {useRouteError} from 'react-router-dom'
import Fragment from 'react'

export default function HandlerRouteError() {
    const error = useRouteError()
    return(
        <Fragment>
            <h1>Sorry</h1>
            <p>{error.statusText || error.message}</p>
        </Fragment>
    )
}