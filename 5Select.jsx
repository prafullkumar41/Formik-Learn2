import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'

function Select(props) {
  const { name, label, options  ,...otherProps} = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field  id = {name}
              name= {name}
// as should be select here
              as = 'select'
              {...otherProps}>
        {
          options.map( option => {
            return(
              <option key = {option.value} value={option.value} >
                  {option.key}
              </option>
            )
          })
        }
      </Field>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Select
