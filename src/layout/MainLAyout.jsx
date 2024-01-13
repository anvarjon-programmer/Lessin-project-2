import React from 'react'
import { SideBar } from './SideBar'

export const MainLAyout = () => {
  return (
    <div>
      <div className='container'>
        <div className="row">
            <div className="col-lg-3">
                <SideBar/>
            </div>
        </div>
    </div>
    </div>
  )
}

