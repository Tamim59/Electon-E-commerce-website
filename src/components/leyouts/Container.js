import React from 'react'

const Container = ({classname, children}) => {
  return (
    <div className='max-w-container mx-auto p-2.5'>{children}</div>
  )
}

export default Container