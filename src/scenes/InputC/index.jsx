import React,{useState} from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { mockDataContacts as data} from "../../data/data";

const initialValues = {

    name: '',
    email: '',
    age: '',
    phone: '',
    address: '',
    city: '',
    zipcode: '',
    registeredId: ''

}

const phoneRegExp =  
            /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
const numberRegExp = 
            /\b([01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])/

const userSchema = yup.object().shape({
    name:  yup.string().required('Required'),
    email:  yup
                .string()
                .email('Invalid Email')
                .required('Required'),
    age:  yup
                .string()
                .matches(numberRegExp, 'Age is Invalid')
                .required('Required'),
   
    phone:  yup
                .string()
                .matches(phoneRegExp,'Phone number is invalid')
                .required('Required'),
    address:  yup
                .string()
                .required('Required'),
    city:  yup
                .string()
                .required('Required'),
    zipcode: yup
                .string()
                .matches(numberRegExp, 'ZipCode is Invalid')
                .required('Required'),
    registeredId: yup
                .string()
                .matches(numberRegExp, 'Registered is Invalid')
                .required('Required'),

})

const Index = () => {

    const [contacts, setContacts] = useState (data)
    const isNonMobile = useMediaQuery('(min-width:600px)')

    const handleFormSubmit = (values) => {
        console.log(values)
    }

    return(
        <Box m ='20px'>
            <Header title='Create User' subtitle='Create a new user Profile' />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues = {initialValues}
                validationSchema = {userSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit
                }) =>(
                    <form onSubmit={ handleSubmit}>
                        <Box 
                            display = 'grid' 
                            gap = '30px' 
                            gridTemplateColumns='repeat(4,minmax(0,1fr))'
                            sx = {{
                                '& > div':{gridColumn: isNonMobile ? undefined : 'span 4'}
                            }}
                        >
                        <TextField
                            fullWidth
                            variant="filled"
                            type='text'
                            label = 'Name'
                            onBlur={handleBlur}
                            onChange = {handleChange}
                            value = {values.name}
                            name = 'name'
                            error = {!!touched.name && !!errors.name}
                            helperText={touched.name && errors.name}
                            sx={{
                                gridColumn: 'span 4'
                                //add a reset funnction
                            }}
                        />
                            <TextField
                            fullWidth
                            variant="filled"
                            type='text'
                            label = 'email'
                            onBlur={handleBlur}
                            onChange = {handleChange}
                            value = {values.email}
                            name = 'email'
                            error = {!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx={{
                                gridColumn: 'span 4'
                            }}
                            //add a reset function
                        />
                            <TextField
                            fullWidth
                            variant="filled"
                            type='text'
                            label = 'Enter age'
                            onBlur={handleBlur}
                            onChange = {handleChange}
                            value = {values.age}
                            name = 'age'
                            error = {!!touched.age && !!errors.age}
                            helperText={touched.age && errors.age}
                            sx={{
                                gridColumn: 'span 4'
                            }}
                            //add a reset function
                            />
                        <TextField
                            fullWidth
                            variant="filled"
                            type='text'
                            label = 'enter the Phone Contact'
                            onBlur={handleBlur}
                            onChange = {handleChange}
                            value = {values.phone}
                            name = 'phone'
                            error = {!!touched.phone && !!errors.phone}
                            helperText={touched.phone && errors.phone}
                            sx={{
                                gridColumn: 'span 4'
                            }}
                        />


                            <TextField
                            fullWidth
                            variant="filled"
                            type='text'
                            label = 'Contact Address '
                            onBlur={handleBlur}
                            onChange = {handleChange}
                            value = {values.address}
                            name = 'address'
                            error = {!!touched.address && !!errors.address}
                            helperText={touched.address && errors.address}
                            sx={{
                                gridColumn: 'span 4'
                            }}
                        />


                        <TextField
                            fullWidth
                            variant="filled"
                            type='text'
                            label = 'City'
                            onBlur={handleBlur}
                            onChange = {handleChange}
                            value = {values.city}
                            name = 'city'
                            error = {!!touched.city && !!errors.city}
                            helperText={touched.city && errors.city}
                            sx={{
                                gridColumn: 'span 4'
                            }}
                            />

                            <TextField
                            fullWidth
                            variant="filled"
                            type='text'
                            label = 'Zipcode'
                            onBlur={handleBlur}
                            onChange = {handleChange}
                            value = {values.zipcode}
                            name = 'zipcode'
                            error = {!!touched.zipcode && !!errors.zipcode}
                            helperText={touched.zipcode && errors.zipcode}
                            sx={{
                                gridColumn: 'span 4'
                            }}
                        />

                        <TextField
                            fullWidth
                            variant="filled"
                            type='text'
                            label = 'Your handed registration Id'
                            onBlur={handleBlur}
                            onChange = {handleChange}
                            value = {values.registeredId}
                            name = 'registredId'
                            error = {!!touched.registeredId && !!errors.registeredId}
                            helperText={touched.registeredId && errors.registeredId}
                            sx={{
                                gridColumn: 'span 4'
                            }}
                        />

                        </Box>
                        <Box display='flex' justifyContent = 'end' mt = '20px' >
                            <Button type="submit" color = 'secondary' variant="contained">
                             CREATE A NEW USER
                            </Button>
                        </Box>
                    </form>
    )}
            </Formik>
        </Box>
    )
}

export default Index