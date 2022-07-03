import React from 'react'
import '../assets/styles/input.scss'

const Input = (props) => {
  return (
    <div className={'input input__' + props.className}>
        <input type={props.type} placeholder={props.placeholder} />
    </div>
  )
}

export default Input