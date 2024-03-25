import React from "react";
import './Cart.css';
import img1 from '../../assets/3755ee9de125176f58d9c34b7753cf7c.jpg';
import img2 from '../../assets/download.jpeg'
import img3 from '../../assets/arsenal.jpg'

const Cart = () => {
  return (
    <>
     <div className="CartDiv">
      <img className="img" src={img1} alt="" />
      <p>$60.00</p>
      <button>ADD TO CART</button>
    </div>

     <div className="CartDiv">
      <img className="img" src={img2} alt="" />
      <p>$95.00</p>
      <button>ADD TO CART</button>
    </div>
~~``
    </> 
  )
}

export default Cart