import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'

//This is the basic input comonent now will add this in FormikControl

function Input(props) {
  const {label, name, type, ...otherProps} = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} type={type} name ={name} {...otherProps}/>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Input
