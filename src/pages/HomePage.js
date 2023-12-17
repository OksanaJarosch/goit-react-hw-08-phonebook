import { Button } from "@chakra-ui/react";
import { User } from "components/User/User";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { selectIsLoggedin, selectUserName } from "redux/authorization/authSelectors";
import { FlexContainer, Titel } from "reusable/Styles.styled";


export default function HomePage() {
    
    const isLoggedin = useSelector(selectIsLoggedin);
    const userName = useSelector(selectUserName);

    return isLoggedin ? (
        
            <FlexContainer>
            <Titel>Hello {userName}!</Titel>
                <Button variant='link' colorScheme="purple" width='200px' marginLeft="auto" marginRight="auto"><Link to="/contacts">To my contacts</Link></Button>
                </FlexContainer>
            
    ) : (
        <>
            <Titel>Wellcome to Phonebook!</Titel>
        </>
    )

}