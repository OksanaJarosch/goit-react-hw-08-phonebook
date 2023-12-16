// import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ButtonsContainer, MenuContainer } from "./UserMenu.styled"
import { Button } from "@chakra-ui/react"
// import { selectUserEmail } from "redux/authorization/authSelectors"


export const UserMenu = () => {

    // const userEmail = useSelector(selectUserEmail);

    return (
        <MenuContainer>
            <Link to="/">Phonebook</Link>

            <ButtonsContainer>
            <Button type="button" colorScheme="purple"><Link to="register">Registration</Link></Button>
        
            <Button type="button" colorScheme="purple"><Link to="login">Login</Link></Button>

            {/* <p>{userEmail}</p> */}
            <Button type="button" colorScheme="purple">Logout</Button>
            </ButtonsContainer>
        </MenuContainer>
    )
}