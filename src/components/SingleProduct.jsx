import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdAddShoppingCart } from "react-icons/md";

export const SingleProduct = () => {
  const [single_product,setSingle_product] = useState({})
  const id = +window.location.href.split('/')[4];
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
      console.log(res);
      setSingle_product(res.data)
    })
  },[])
  return (
    <div className="containers">
      <div className='singleCard-wraper'>
      <div className="singleCard-img">
        <img src={single_product.image} alt="" />
      </div>
       <div className="singleCard-body">
        <h3 className='singleCard-title'>{single_product.title}</h3>
        <div className="singleCard-titleProce">
        <h4><i>Price</i> ${single_product.price}</h4>
        </div>
        <div className='line'></div>
        <p className='singleCard-text'>
          {single_product.description}
        </p>
        <button className='add-card'>
        <MdAddShoppingCart />
        Add to card
        </button>
       </div>
    </div>
    </div>
  )
}
