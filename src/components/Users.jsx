import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Users = () => {
  const [contries,setContries] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [itemsPerPage,setItemsPerPage] = useState(8);
  useEffect(()=>{
    axios.get("https://api.github.com/users").then(response=>{
      setContries(response.data)
      console.log(response);
    })
  },[]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOffirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = contries.slice(indexOffirstItem,indexOfLastItem);
  const paginate = PagesNumber => setCurrentPage(PagesNumber);
  return (
    <div className='container'>
        <div className="row">
              {
                currentCountries.map((items,index)=>{
                  return <div className="col-lg-3">
                    <div className="card" id='card'>
                      <img src={items.avatar_url} alt="" />
                      <div className="card-body">
                         <h3 id='card-title' className='card-title'> <i>Name</i>: {items.login}</h3>
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
