import React from 'react'

const Dropdown = (props) => {
  const onChangeEvent = (e) => {
    props.setFormValues ({...props.formValues, [e.target.id]: e.target.value})
  }
  return (
    <div className='div'>
      <div className='row'>
      <label className='col-2'>{props.label}</label>
      <select className="col-10" name={props.label} id={props.label} onChange={onChangeEvent}>
        {props.options?.map ((item, index) => 
            <option key={index} value={item}>{item} </option>
        )}
      </select>
      </div>
    </div>
  )
}

export default Dropdown
