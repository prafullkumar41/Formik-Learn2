import React from 'react'
import Input from './3Input'
import TextArea from './4TextArea'
import Select from './5Select'
import RadioButton from './6RadioButton'
import CheckBox from './7CheckBox'
import DatePicker from './8DatePicker'


//This component will decide which of the for fields needed to be rerendered based on particular prop 
//We will do it by simple switch case

//We will add input component. After this we will add this Form Control in FormikContainer

function FormControl(props) {
  const {control, ...otherProps} = props
    switch (control) {
      case 'input': 
              return <Input {...otherProps}/>
      case 'textarea':
              return <TextArea {...otherProps}/>
      case 'select':
              return <Select {...otherProps}/>
      case 'radio':
              return <RadioButton {...otherProps}/>
      case 'checkbox':
              return <CheckBox {...otherProps}/>
      case 'date':
              return <DatePicker {...otherProps}/>
      default: return null
  }
}

export default FormControl
