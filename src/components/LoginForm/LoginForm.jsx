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


const schema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").required('Required'),
    email: Yup.string().email().required('Required'),
    password: Yup.string().min(5, "Too short").required('Required'),
});


export const LoginForm = () => {


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {  
            console.log(values);           
            }}
    )

    return (
        <Flex align="center" justify="center" h="100vh">
            <Box bg="white" p={6} rounded="md">
                <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                    <Text fontSize="2xl" fontWeight="bold" marginRight="auto" marginLeft="auto">Login</Text>
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
                            Sign In
                        </Button>
                    </VStack>
                </form>
            </Box>
        </Flex>
    );
    }