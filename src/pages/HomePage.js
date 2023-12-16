import { User } from "components/User/User";
import { useSelector } from "react-redux";
import { selectIsLoggedin } from "redux/authorization/authSelectors";
import { Titel } from "reusable/Styles.styled";


export default function HomePage() {
    
    const isLoggedin = useSelector(selectIsLoggedin);

    return isLoggedin ? (<User/>) : (
        <>
            <Titel>Wellcome to Phonebook!</Titel>
        </>
    )
}