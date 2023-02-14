import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompaniesData } from "../../slices/companiesSlice";
import CompanyPage from "./companyPage";
import LoadingPage from "../loadingPage/loadingPage";

export default function FulfilledCompanyPage() {
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
        {companiesData ? <CompanyPage /> : <LoadingPage />}
    </Fragment>
    )
}