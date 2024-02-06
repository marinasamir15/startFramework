import React, { useState } from 'react'
import './portfolio.css'
import img1 from '../../assets/imgs/portfolio/poert1.png'
import img2 from '../../assets/imgs/portfolio/port2.png'
import img3 from '../../assets/imgs/portfolio/port3.png'
import img4 from '../../assets/imgs/portfolio/poert1.png'
import img5 from '../../assets/imgs/portfolio/port2.png'
import img6 from '../../assets/imgs/portfolio/port3.png'
import PortfolioCard from '../PortfolioCard/PortfolioCard'
import Modal from '../Modal/Modal'
export default function Portfolio() {
const imglist=[
  {
   id:1,
   src:img1,
   alt:img1 
  },
  {
    id:2,
    src:img2,
    alt:img2  
  },
  {
    id:3,
    src:img3,
    alt:img3  
  },
  {
    id:4,
    src:img4,
    alt:img4  
  },
  {
    id:5,
    src:img5,
    alt:img5  
  },
  {
    id:6,
    src:img6,
    alt:img6  
  }
];
const [isopenModel,setOpen]=useState(false);
const [selectImage,setImage]=useState('');
let mySelectImage=(src)=>{
  setOpen(true)
  setImage(src)
  console.log(src)
}

  return (
    <div className='py-5 port min-vh-100  '>
    <div className="container ">
      <h2 className='mt-5 pt-5 text-center fw-bold'>PORTFOLIO COMPONENT</h2>
      <div className=' d-flex align-items-center justify-content-center mb-4 mt-3'>
      <div className='line-port me-3'></div>
      <i className='fa-solid fa-star icon-port'></i>
      <div className='line-port ms-3'></div>
      </div>
     <div className="row gy-4">
     {imglist.map((img)=>(
      <PortfolioCard key={img.id} img={img} mySelectImage={mySelectImage} />
     ))}
     </div>
     {isopenModel && <Modal isopen={setOpen} selectedimage={selectImage}/>}
  </div>
  </div>
  )
}
