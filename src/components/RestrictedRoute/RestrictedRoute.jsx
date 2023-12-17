import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLoggedin } from "redux/authorization/authSelectors"



export const PrivateRoute = ({component: Component, redirect = "/"}) => {
    
    const isLoggedin = useSelector(selectIsLoggedin);

    return isLoggedin ? (<Navigate to="redirect" />) : Component;
}