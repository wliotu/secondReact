import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Cart from './components/Cart/Cart';


import img1 from './assets/img1.jpeg'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.jpeg'
import img4 from './assets/img4.jpeg'
import img5 from './assets/img5.jpeg'
import img6 from './assets/img6.jpeg'
import img7 from './assets/img7.jpeg'
import img8 from './assets/img8.jpeg'


const data = [
  {
    image:img1,
    price:'1000'
  },
  {
    image:img2,
    price:'28098'
  },
  {
    image:img3,
    price:'1'
  },
  {
    image:img4,
    price:'90'
  },
  {
    image:img5,
    price:'76'
  },
  {
    image:img6,
    price:'20'
  },
  {
    image:img7,
    price:'32879'
  },
  {
    image:img8,
    price:'10000000'
  }
]





function App() {
  return (
    <div className="App">
        <Cart />
      {
        data.map( item => (

          <Form 
            image={item.image}
            price={item.price}
          />
        ))
      }
    </div>
  );
}

export default App;
