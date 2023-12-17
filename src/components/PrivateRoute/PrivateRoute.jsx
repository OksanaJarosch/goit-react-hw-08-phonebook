import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLoggedin, selectIsRefreshing } from "redux/authorization/authSelectors"



export const PrivateRoute = ({component: Component, redirect = "/"}) => {
    
    const isLoggedin = useSelector(selectIsLoggedin);
    const isRefreshing = useSelector(selectIsRefreshing);
    const shouldRedirect = !isLoggedin && !isRefreshing;

    return shouldRedirect ? (<Navigate to="redirect" />) : Component;
}