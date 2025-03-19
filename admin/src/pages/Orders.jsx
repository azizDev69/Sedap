import React from 'react'
import ContainerTemplate from '../components/Container'
import Title from '../components/Title'

const Orders = () => {
  return (
    <ContainerTemplate>
      <div>
        <div className='flex justify-between'>
          <Title title="Your Orders" description='This is your order list data' />
        </div>
      </div>
    </ContainerTemplate>
  )
}

export default Orders