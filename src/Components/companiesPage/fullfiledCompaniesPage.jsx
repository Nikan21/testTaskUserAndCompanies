import { Fragment, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { getCompaniesData } from "../../slices/companiesSlice";
import LoadingPage from "../loadingPage/loadingPage";
import CompaniesPage from "./companiesPage";

export default function FulfilledCompaniesPage() {
    const dispatch = useDispatch()
    const status = useSelector(state => state.getCompanies.statusGet)
    const companiesData = useSelector(state => state.getCompanies.companiesData[0])
    const updatedCompaniesData = useSelector(state => state.getCompanies.updatedCompaniesData[0])

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getCompaniesData())
        }
    }, [dispatch, status])

    useEffect(() => {
        if (JSON.stringify(companiesData) !== JSON.stringify(updatedCompaniesData) && updatedCompaniesData) {
            dispatch(getCompaniesData())
        }
    }, [dispatch, companiesData, updatedCompaniesData])

    return(
        <Fragment>
        {companiesData ? <CompaniesPage /> : <LoadingPage />}
    </Fragment>
    )
}