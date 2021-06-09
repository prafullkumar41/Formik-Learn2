import React from 'react'
import { Formik, Form }  from 'formik'
import * as Yup from 'yup'
import FormControl from './2FormikControl.component'

//Reusable Formik Container

function FormikContainer() {
  const checkOptions = [
    {key:'Check 1', value: 'Check value 1'},
    {key:'Check 2', value: 'Check value 2'},
    {key:'Check 3', value: 'Check value 3'}
  ]
  const radioOptions = [
    {key:'Radio 1', value: 'Radio value 1'},
    {key:'Radio 2', value: 'Radio value 2'},
    {key:'Radio 3', value: 'Radio value 3'}
  ]
  const dropdownOptions = [
    {key:'Select an Option', value: ''},
    {key:'Option 1', value: 'value 1'},
    {key:'Option 2', value: 'value 2'},
    {key:'Option 3', value: 'value 3'}
  ]
  const initialValues = {
    email : '',
    description : '',
    selectOption : '',
    radioOption : '',
    checkboxOption : [], //Check Box is an array because it let you select multiple options
    birthdate : null
  }
  const validationSchema = Yup.object({
    email : Yup.string().required('Email Required..!!'),
    description : Yup.string().required('Description Required..!!'),
    selectOption : Yup.string().required('Option Required..!!'),
    radioOption : Yup.string().required('Radio Button Required..!!'),
    checkboxOption : Yup.array().required('Checkbox Required..!!'),//Validation is also array
    birthdate : Yup.date().required('Birthdate Required..!!').nullable()//nullable allows us to set a null value
  })
  const onSubmit = values => console.log('Submission Values',values)
  return (
    <Formik initialValues = {initialValues}
            onSubmit = {onSubmit}
            validationSchema = {validationSchema}>
      {
        (formik) => { 
            // console.log('Formik Props',formik) 
          return(  
          <Form>
             <FormControl control='input' 
                          type='email' 
                          label='Email' 
                          name='email' />

              <FormControl control ='textarea'
                           label = 'Description'
                           name = 'description' />

              <FormControl control='select'
                           label ='Select Option'
                           name = 'selectOption'
                           options = {dropdownOptions} /> 

              <FormControl control='radio'
                           label ='Radio Topic'
                           name = 'radioOption'
                           options = {radioOptions} />                           

              <FormControl control='checkbox'
                           label ='Check Box Topics'
                           name = 'checkboxOption'
                           options = {checkOptions} />                           

              <FormControl control='date'
                           label ='Pick Birth Date'
                           name = 'birthdate'/>                           

 
            <br/>
            <button type='submit'>Submit</button>
          </Form>
          )}
      }      
    </Formik>
  )
}

export default FormikContainer
