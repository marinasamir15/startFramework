import React from 'react'
import './portofilocard.css'
export default function PortfolioCard({img,mySelectImage}) {
  return (
    
  <div className="col-md-4">
    <div className="inner overflow-hidden position-relative rounded-3">
    <img src={img.src} alt={img.alt} className='w-100 rounded-3'/>
    <div className="layer position-absolute start-0 end-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center " onClick={()=>{mySelectImage(img.src)}}>
    <i className="text-white fa-solid fa-plus fa-5x"></i>
    </div>
    </div>
  </div>
    
  )
}
