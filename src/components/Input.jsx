import React, {useState} from 'react'
import '../assets/styles/input.scss'

const Input = (props) => {
  const {className, attr} = props.data;
  
  return (
    <div className={'input input__' + className}>
        <input
            {...attr}
        />
    </div>


  )
}

export default Input