import React from 'react'

const Button = ({name}) => {
  return (
    <div >
        <button className='px-3 py-1 rounded-md bg-gray-400/50'>{name}</button>
    </div>
  )
}

export default Button