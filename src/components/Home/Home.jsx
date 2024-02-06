import React from 'react'
import img from '../../assets/imgs/avataaars.svg'
import style from'./Home.module.css'
export default function Home() {
  return (
    <>
  <div className= {`${style.home} d-flex justify-content-center align-items-center min-vh-100`}>
    <div className='container d-flex flex-column justify-content-center align-items-center '>
       <img src={img} alt='img' className=' w-25'></img>
       <h1 className='fw-bold my-2 text-white'>START FRAMEWORK</h1>
       <div className=' d-flex align-items-center justify-content-center mb-3'>
        <div className={`${style.line} me-3`}></div>
        <i className='fa-solid fa-star text-white'></i>
        <div className={`${style.line} ms-3 `}></div>
        </div>
        <div className='text-white'>
        Graphic Artist - Web Designer - Illustrator
        </div>
    </div>
  </div>
    </>
  )
}
