import React from 'react'
import imgnot from '../../assets/imgs/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg'
export default function NotFound() {
  return (
    <div className='py-5 port min-vh-100  '>
    <div className="container ">
      <h2 className='mt-5 pt-5 text-center fw-bold'>Not Found</h2>
      <div className=' d-flex align-items-center justify-content-center mb-4 mt-3'>
      <div className='line-port me-3'></div>
      <i className='fa-solid fa-star icon-port'></i>
      <div className='line-port ms-3'></div>
      
      </div>
      <div className="container text-center">
      <img src={imgnot} alt ="notfound" className='w-50'/> 
      </div>
     
  </div>
  </div>
  )
}
