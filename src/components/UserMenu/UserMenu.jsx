// import { useSelector } from "react-redux"
import { MenuContainer } from "./UserMenu.styled"
// import { selectUserEmail } from "redux/authorization/authSelectors"


export const UserMenu = () => {

    // const userEmail = useSelector(selectUserEmail);

    return (
        <MenuContainer>
            {/* <p>{userEmail}</p> */}
            <button>Logout</button>
        </MenuContainer>
    )
}