import React from 'react'

import img1 from '../../assets/img1.jpeg'

const Cart = () => {
  return (
    <div className='Cart'>
      <h1>Shopping Cart</h1>
      <img src={img1} alt="img" />
      <p className='price'>$ 50</p>
    </div>
  )
}

export default Cart