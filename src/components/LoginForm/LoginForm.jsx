import { Formik } from 'formik';
import * as Yup from 'yup';
import { Error, StyledForm, StyledInput, StyledLabel } from './LoginForm.styled';


const schema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string().min(5, "Too short").required('Required'),
});

export const LoginForm = () => {

    const handleSignIn = values => {
        console.log(values);
    }

    return (
    <Formik

        initialValues={{ 
            email: '',
            password: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {              
            handleSignIn(values);
                actions.resetForm();
            }}
     >
        <StyledForm>

        <StyledLabel>
        <StyledInput type="email" name="email" />
        <Error name="email" component="p"/>
        </StyledLabel>

        <StyledLabel>
        <StyledInput type="password" name="password"/>
        <Error name="password" component="p"/>
        </StyledLabel>

        <button type="submit">Sign Up</button>
    </StyledForm>

    </Formik>
)}