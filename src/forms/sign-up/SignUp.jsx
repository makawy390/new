// import React from 'react'
import {Formik , Field , Form , ErrorMessage} from 'formik'
import { Container } from '@mui/material';
import * as Yup from 'yup';
import './signup.css'
const SignUp = () => {
 const initialFormData = {
  username:'',
  email:'',
  password :'',
 }
 const objectSchema = Yup.object({
  username : Yup.string().required("user name is required").min(4 ,"user name is shorty!"),
  email : Yup.string().email("Invalid Email").required("email is required"),
  password : Yup.string().required("password is required").min(8 ,"password is shorty!"),

 });
 
  return (
    <div className="sign-up">
      <Container fixed>
     <Formik validationSchema={objectSchema} initialValues={initialFormData} onSubmit={(e) => {
    console.log(e);
   }}>
    <Form>
    <label htmlFor="username">Username</label>
    <Field name='username' type="text" />
    <ErrorMessage name="username">
      {msg => <div style={{color:"red"}}>{msg}</div>}
    </ErrorMessage>
    
    <label htmlFor="email">Email</label>
    <Field name='email' type="email" />
    <ErrorMessage name="email">
      {msg => <div style={{color:"red"}}>{msg}</div>}
    </ErrorMessage>

    <label htmlFor="password">password</label>
    <Field name='password' type="password" />
    <ErrorMessage name="password">
      {msg => <div style={{color:"red"}}>{msg}</div>}
    </ErrorMessage>
<button type='submit'>Submit</button>
    </Form>

   </Formik>
</Container>
    </div>
  )
}

export default SignUp