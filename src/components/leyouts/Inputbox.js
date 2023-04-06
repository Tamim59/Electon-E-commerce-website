import React from 'react'

const Inputbox = ({type, placeholder, className}) => {
  return (
    <input className={className} type={type} placeholder={placeholder} />
  )
}

export default Inputbox