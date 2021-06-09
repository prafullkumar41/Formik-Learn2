import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'

function TextArea(props) {
  const {name,label,...otherProps} = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
{/* as will be textarea */}
      <Field id={name} as='textarea' name ={name} {...otherProps}/>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}
export default TextArea
