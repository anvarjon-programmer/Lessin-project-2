import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Cards = () => {
  const [contries,setContries] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [itemsPerPage,setItemsPerPage] = useState(16);
  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all").then(response=>{
      setContries(response.data)
    })
  },[]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOffirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = contries.slice(indexOffirstItem,indexOfLastItem);
  const paginate = PagesNumber => setCurrentPage(PagesNumber);
  return (
    <div className='container' id='card-container'>
        <div className="row">
              {
                currentCountries.map((items,index)=>{
                  return <div className="col-lg-3">
                    <div className="card" id='card'>
                      <img className='card-img-top' src={items.flags.png} alt="" />
                      <div className="card-body">
                        <h3 className='card-title'>{items.name.common}</h3>
                        <h5> <i>Population:</i>{items.population}</h5>
                        <h5> <i>Area:</i>{items.area}</h5>
                      </div>
                    </div>
                  </div>
                })
              }
        </div>
        <div className="pagination">
        {[...Array(Math.ceil(contries.length / itemsPerPage)).keys()].map(number => (
                    <button className='btn btn-primary' key={number + 1} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </button>
                ))}
        </div>
    </div>
  )
}
