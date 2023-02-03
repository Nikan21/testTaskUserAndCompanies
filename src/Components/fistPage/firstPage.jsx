import { Navigate } from "react-router-dom";

export default function FirstPage() {
    const isUserHasToken = false
        
    if (isUserHasToken) {
        return <Navigate to="/main"/>
    } else {
        return <Navigate to="/anonym"/>
    }

}