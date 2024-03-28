import React from 'react'


const Form = ({image, price}) => {
  return (
    <div className='Form'>
      <img src={image} alt="img" />
      <p className='form_price'>$ {price}</p>
      <button className='form_add'>ADD TO CART</button>
    </div>
  )
}
export default Form
