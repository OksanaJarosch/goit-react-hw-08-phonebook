import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ButtonsContainer, MenuContainer } from "./UserMenu.styled"
import { Button } from "@chakra-ui/react"
import { selectUserEmail } from "redux/authorization/authSelectors"
import { logout } from "redux/authorization/authOperations"


export const UserMenu = () => {

    const userEmail = useSelector(selectUserEmail);
    const dispatch = useDispatch();

    const handleLogout = () => dispatch(logout())

    return (
        <MenuContainer>
            <Link to="/">Phonebook</Link>

            <ButtonsContainer>
            <Button type="button" colorScheme="purple"><Link to="register">Registration</Link></Button>
        
            <Button type="button" colorScheme="purple"><Link to="login">Login</Link></Button>

            {userEmail && <p>{userEmail}</p>}
            <Button type="button" colorScheme="purple" onClick={handleLogout}>Logout</Button>
            </ButtonsContainer>
        </MenuContainer>
    )
}