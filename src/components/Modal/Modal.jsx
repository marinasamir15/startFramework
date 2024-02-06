import React from 'react'
import './model.css'
export default function Modal({isopen,selectedimage}) {
    const closeModel=(e)=>{
       if (e.target.classList.contains("modal-container")){
          isopen(false) ;
       }
    }
  return (
    <div>
      <div className="modal-container position-fixed top-0 end-0 start-0 bottom-0 d-flex align-items-center justify-content-center" onClick={closeModel}>
      <img src={selectedimage} alt="selectedimg" className='modal-image  rounded-3' />
      </div>
    </div>
  )
}
