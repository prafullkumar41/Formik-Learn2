import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../components/2FormikControl.component'

function LoginForm(props) {
  const initialValues = {
        email : '',
        password: ''
      }
  const validationSchema = Yup.object({
        email : Yup.string().email('Invalid Email Format').required('Required'),
        password : Yup.string().required('Required')
      })
  const onSubmit = (values) => {
    console.log('Submitted Values', values)
  }
  return (
    <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
          {
            formik => {
              return(
                <Form>

                  <FormikControl
                    control = 'input'
                    type = 'email'
                    name = 'email'
                    label = 'Email'/>

                  <FormikControl
                    control = 'input'
                    type = 'password'
                    
                    name = 'password'
                    label = 'Password'/>

                  <button type='submit' disabled={ !formik.isValid}>Submit</button>  
                
                </Form>
              )
            }
          }     
    </Formik>
  )
}

export default LoginForm
