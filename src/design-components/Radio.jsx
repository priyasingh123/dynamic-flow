import React from 'react'
import './style.css'

const Radio = (props) => {
  const {label, formValues, setFormValues} = props;
  const onChangeEvent = (e) => {
    setFormValues({...formValues, [label]: e.target.value})
  }

  return (
    <div className='container'>
      <div className='row'>
      <label className='col-2'>{label}</label>
      <br/>
      <div className='col-10 d-flex'>
        {props?.options.map((item, index) =>
          <React.Fragment key={`${item}-${index}`}>
            <input className="p-2" type="radio" value={item} name={label} onChange={onChangeEvent}/>
            <label className="p-2" >{item}</label>
            <br />
          </React.Fragment>
        )}
         </div>
    </div>
    </div>
  )
}

export default Radio
