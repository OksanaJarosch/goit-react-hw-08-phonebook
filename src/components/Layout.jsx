import { Outlet } from "react-router-dom"
import { UserMenu } from "./UserMenu/UserMenu"


export const Layout = () => {
    return (
        <>
        <UserMenu/>
        <Outlet></Outlet>
        </>
    )
}