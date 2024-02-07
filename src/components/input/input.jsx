import React from 'react'
import './input_styles.css'

const Input = () => {
  return (
    <div className ="input ">
      <input type="email" placeholder="Input email" className='email'/>
      <input type="password" placeholder="Input password" className='password' />
    </div>
  )
}

export default Input
