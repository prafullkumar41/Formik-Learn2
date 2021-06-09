import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'

function RadioButton(props) {
  const { label,name,options, ...otherProps } = props
  return (
    <div className='form-control'>
      <label>{label}</label> {/* Note no htmlfor */}
      <Field name={name} {...otherProps}>
        {
          ({field}) => {
            // console.log('Field',field)
            return options.map( option => { // For each option we will return a combination of input and label
              return(
                // Since we can't return multiple elements we will use React.Fragment and pass key
                <React.Fragment key={option.key}>
                  <input 
                    type = 'radio'
                    id = {option.value}
                    {...field} // It is very important to spread this field prop it is handling
                               // onChange and onBlur event within the radio buttons
                               //also it should be above value and checked
                    value = {option.value}
                    checked = {field.value === option.value}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              )
            })
          }
          }
      </Field>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default RadioButton
