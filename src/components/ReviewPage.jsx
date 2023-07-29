import React from 'react'

const ReviewPage = (props) => {
  return (
    <div className='container'>
      <label className='col-2'>
        {props.element.label}
      </label>
      <strong className='col-4 p-2'>{props.formValues[props.element.label]}</strong>
    </div>
  )
}

export default ReviewPage
