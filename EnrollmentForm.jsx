import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormControl from '../components/2FormikControl.component'

function EnrollmentForm() {
  const checkOptions = [
    {key:'HTML', value:'html checked'},
    {key:'CSS', value:'css checked'},
    {key:'JavaScript', value:'javascript checked'}
  ]
  const dropOptions = [
    {key:'Select an Option', value: ''},
    {key:'Java', value:'java option'},
    {key:'Python', value:'python option'},
    {key:'React', value:'react option'}
  ]

  const initialValues = {
    email:'',
    bio:'',
    course:'',
    skillset:[],//multiple values
    courseDate:null
  }

  const validationSchema = Yup.object({
    email : Yup.string().email('Invalid Email').required('required'),
    bio : Yup.string().required('required'),
    course : Yup.string().required('required'),
    courseDate : Yup.date().required('required').nullable()
  })

  const onSubmit = (values) => (
    console.log('Submitted Values', values)
  )

  return (
    <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
        {
          (formik) => (
            <Form>
                <FormControl
                    control = 'input'
                    name ='email'
                    type='email'
                    label = 'Email'
                    />
                <FormControl
                    control = 'textarea'
                    name ='bio'
                    label = 'Bio'
                    />
                <FormControl
                    control = 'select'
                    name ='course'
                    label = 'Course'
                    options = {dropOptions}
                    />
                <FormControl
                    control = 'checkbox'
                    name ='skillset'
                    label = 'SkillSet'
                    options = {checkOptions}
                    />
                <FormControl
                    control = 'date'
                    name ='courseDate'
                    label = 'CourseDate'
                    />
                <button type='submit' disabled={ !formik.isValid}>Submit</button>  
            </Form>
          )
        }     
      
    </Formik>
  )
}

export default EnrollmentForm
