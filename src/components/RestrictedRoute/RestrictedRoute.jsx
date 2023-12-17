import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLoggedin } from "redux/authorization/authSelectors"



export const RestrictedRoute = ({component: Component, redirect = "/"}) => {
    
    const isLoggedin = useSelector(selectIsLoggedin);

    return isLoggedin ? (<Navigate to="redirect" />) : Component;
}