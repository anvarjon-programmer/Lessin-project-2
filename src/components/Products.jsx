import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`).then((res)=>{
            setProducts(res.data)
        })
    },[])
  return (
    <div className='container'>
        <div className="row">
            {
                products.map((item,index)=>{
                    return <div className="col-lg-3">
                        <div className="card">
                            <img className='car-img-top' src={item.image} alt="title" lazy='loading' />
                            <div className="card-body">
                                <div className="cardbody-inner">
                                    <h4 className='card-title'>{item.title.slice(0,25)}...</h4>
                                    <div className='price-rating'>
                                    <h4 className='price'> <i>Price:</i> {item.price}</h4>
                                    <h4 className='raiting'><i>Rating</i> {item.rating.count}</h4>
                                    </div>
                                    {/* <p className='card-text'>{item.description}</p> */}
                                    <Link className='btn btn-success' to={`/SingleProduct/${item.id}`}>
                                        view Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}
