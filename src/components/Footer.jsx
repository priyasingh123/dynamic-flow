import React from 'react'

const Footer = (props) => {
  const {setPageStatus, reviewStatus} = props

  const onButtonClick = (e) => {
    if (reviewStatus === 'entry') {
      setPageStatus('review')
    }
    else if (reviewStatus === 'review') {//if review status is false
      setPageStatus('confirm')
    }
    else {
      setPageStatus('entry')
    }
  }

  return (
    <div className='my-3'>
      <button className="btn btn-primary" style={{float: "right"}} onClick={onButtonClick}>{reviewStatus === 'entry' ? 'Review': reviewStatus === 'review' ? 'Submit' : 'Next Request'}</button>
    </div>
  )
}

export default Footer
