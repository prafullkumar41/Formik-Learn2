import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormControl from '../components/2FormikControl.component'

function RegistrationForm() {
  const options = [
    {key:'Email',value:'emailmoc'},
    {key:'Telephone',value:'telephonemoc'}
  ]
  const initialValues = {
    email:'',
    password:'',
    confirmPassword:'',
    modeofContact:'',
    phone:''
  }
  const validationSchema = Yup.object({
    email : Yup.string().email('Invalid Email').required('Required'),
    password : Yup.string().required('Required'),
    confirmPassword : Yup.string()
                        .oneOf([Yup.ref('password'),''],'Passwords must match')
                        .required('Required'),
    modeofContact : Yup.string().required('Required'),
    phone : Yup.string().when('modeofContact', {
              is: 'telephonemoc',
              then: Yup.string().required('Required')
    })                      
  })
  const onSubmit = values => {
    console.log('Submitted Values',values)
  }
  return (
    <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
        {
          (formik) => (
            <Form>
              <FormControl 
                    control='input' 
                    label='Email' 
                    type='email' 
                    name='email' />
              <FormControl 
                    control='input' 
                    label='Password' 
                    type='password' 
                    name='password' />
              <FormControl 
                    control='input' 
                    label='Confirm Password' 
                    type='password' 
                    name='confirmPassword' />
              <FormControl 
                    control='radio' 
                    label='Mode of Contact' 
                    name='modeofContact' 
                    options={options}/>
              <FormControl 
                    control='input' 
                    label='Phone' 
                    type='text' 
                    name='phone' />

              <button type='submit' disabled={ !formik.isValid}>Submit</button>  
      
            </Form>
          )
        }   
    </Formik>
  )
}

export default RegistrationForm
