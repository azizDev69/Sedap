import React from 'react'
import { MdDescription } from 'react-icons/md'

const Title = ({ title, description }) => {
  return (
    <div>
      <h1 className='text-xl font-bold'>{title}</h1>
      <p className=''>{description}</p>
    </div>
  )
}

export default Title