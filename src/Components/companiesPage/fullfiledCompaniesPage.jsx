import { Fragment, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { getCompaniesData } from "../../slices/companiesSlice";
import LoadingPage from "../loadingPage/loadingPage";
import CompaniesPage from "./companiesPage";

export default function FulfilledCompaniesPage() {
    const dispatch = useDispatch()
    const status = useSelector(state => state.getCompanies.statusGet)
    const companiesData = useSelector(state => state.getCompanies.companiesData[0])

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getCompaniesData())
        }
    }, [dispatch, status])
    
    console.log(companiesData)

    return(
        <Fragment>
        {companiesData ? <CompaniesPage /> : <LoadingPage />}
    </Fragment>
    )
}