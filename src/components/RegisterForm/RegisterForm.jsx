import * as Yup from 'yup';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Text,
    VStack
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux';
import { registration } from 'redux/authorization/authOperations';


const schema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").required('Required'),
    email: Yup.string().email().required('Required'),
    password: Yup.string().min(5, "Too short").required('Required'),
});


export const RegisterForm = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {  
            dispatch(registration(values))          
            }}
    )

    return (
        <Flex bg="gray.100" align="center" justify="center" h="100vh">
            <Box bg="white" p={8} rounded="md">
                <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                    <Text fontSize="2xl" fontWeight="bold" marginRight="auto" marginLeft="auto">Create Account</Text>
                        <FormControl isInvalid={formik.touched.name && formik.errors.name}>
                            <FormLabel htmlFor="name">Your Name</FormLabel>
                            <Input
                                name="name"
                                id="name"
                                type="name"
                                variant="outline"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                            />
                            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input
                                name="email"
                                id="email"
                                type="email"
                                variant="outline"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                            />
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.password && formik.errors.password}>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                variant="outline"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                            />
                            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                        </FormControl>
                        <Button type="submit" colorScheme="purple" width="full" marginTop="4">
                            Sign Up
                        </Button>
                    </VStack>
                </form>
            </Box>
        </Flex>
    );
    }