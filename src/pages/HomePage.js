import { Link } from "react-router-dom";


export default function HomePage () {

    return (
        <>
        <h1>Wellcome to Phonebook!</h1>
        <Link to="register">Registration</Link>
        <br/>
        <Link to="login">Login</Link>
        </>
    )
}