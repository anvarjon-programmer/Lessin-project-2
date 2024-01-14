import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


export const SideBar = () => {
    // const [list,setList] = useState([
    //     {id:1,  title:"Products",path:""} ,
    //     {id:2, title:"Card",path:""} ,
    //     // {id:3, title:"Pohotos",path:""} ,
    // ]);
    // const [active,setActive] = useState(1);
    // const activeTab =(id)=>{
    //     setActive(id);
    //     localStorage.setItem('id',id)
    // }
    // useEffect(()=>{
    //     let val = +localStorage.getItem('id');
    //     if(val){
    //         setActive(val)
    //     }else{
    //         setActive(1)
    //     }
    // })
  return (
    <div className="dibvar-wraper">
        <div className='sideBar'>
    {/* <ul>
        {
            list.map((item,index)=>{
                return<li className='btn-Wrapper'>
                    <NavLink to='/products' className={active == item.id ? 'active_btn': ''} onClick={()=>activeTab(item.id)}>{item.title}</NavLink>
                    <NavLink to='/cards' className={active == item.id ? 'active_btn': ''} onClick={()=>activeTab(item.id)}>{item.title}</NavLink>

                </li>
            })
        }
    </ul> */}
                    <div className="links">
                    <NavLink end className={({isActive}) => isActive ? "navlink--active navLink" : "navLink"} to='/products'>Product</NavLink>
                    <NavLink className={({isActive}) => isActive ? "navlink--active navLink" : "navLink"} to='/cards'>Cards</NavLink>
                    <NavLink className={({isActive}) => isActive ? "navlink--active navLink" : "navLink"} to='/users'>Users</NavLink>
                    <NavLink className={({isActive}) => isActive ? "navlink--active navLink" : "navLink"} to='/usersInfo'>User'S Comment</NavLink>
                    </div>


    </div>
    </div>
  )
}

