import React from 'react'
import './style.css'

const CheckBox = (props) => {
  //get values by destructuring 
  const {formValues, label} = props

  const onChangeEvent = (e) => {
    let updatedValue = formValues[label] ? [...formValues[label]] : []

    let {checked, value} = e.target
    //if checkbox is checked
    if (checked) {
      updatedValue.push (value)
    }
    else {
      //if checkbox is unchecked
      const index = updatedValue.indexOf(value)
      
      //if that value is there inside the array, remove it 
      if (index !== -1) {
        updatedValue.splice(index, 1)
      }
    }
    //finally update checkbox data using setFormValues
    props.setFormValues ({...formValues, [label]: updatedValue})
  }

  return (
    <div className='conatiner'>
      <div className="row">
      <label className='col-2'>{label}</label>
      <div className="col-10 d-flex">
      {props?.options.map ((item, index) => 
          <React.Fragment key={`${item}-${index}`}>
            <input className="p-2" type="checkbox" value={item} onChange={onChangeEvent} />
            <label className="p-2" >{item}</label>
          </React.Fragment>
      )}
      </div>
      </div>
    </div>
  )
}

export default CheckBox
