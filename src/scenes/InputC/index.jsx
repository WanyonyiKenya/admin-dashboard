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

const Index = ({newContact}) => {

  const [id, setId] = React.useState('');
  const [registarId, setRegistarId] = React.useState(initialValues.registeredId);
  const [name, setName] = React.useState(initialValues.name);
  const [age, setAge] = React.useState(initialValues.age);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [zipCode, setZipCode] = React.useState(initialValues.zipcode);
    const isNonMobile = useMediaQuery('(min-width:600px)')


    // const inputChange = (e) =>{
    //     setRegistarId,setName,setAge,setEmail,setPhone,setAddress,setCity,setZipCode(e.target.value)
    // }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        newContact(registarId,name,age,email,phone,address,city,zipCode)
        // setRegistarId,setName,setAge,setEmail,setPhone,setAddress,setCity,setZipCode('')
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
                            value = {name}
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
                            value = {email}
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
                            value = {age}
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
                            value = {phone}
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
                            value = {address}
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
                            value = {city}
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
                            value = {zipCode}
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
                            value = {registarId}
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