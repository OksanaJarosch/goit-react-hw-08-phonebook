import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';


const schema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").required('Required'),
    email: Yup.string().email().required('Required'),
    password: Yup.string().min(5, "Too short").required('Required'),
});

export const RegisterForm = () => {

    const handleSignUp = values => {
        console.log(values);
    }

    return (
    <Formik

        initialValues={{ 
            name: '',
            email: '',
            password: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {              
            handleSignUp(values);
                actions.resetForm();
            }}
    >
        <Form>
        <label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="p"/>
        </label>

        <label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="p"/>
        </label>

        <label>
        <Field type="password" name="password"/>
        <ErrorMessage name="password" component="p"/>
        </label>

        <button type="submit">Sign Up</button>
    </Form>

    </Formik>
)}