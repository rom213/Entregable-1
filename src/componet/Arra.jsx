import React from 'react'
import './arra.css'

const Arra = ({quoteran,handleclick,quoteranColor}) => {

    return (
<div style={{backgroundColor:quoteranColor.color}} className="vh">
  <div  style={{color:quoteranColor.color}} className='tarjeta'>
    <div className='text'>
        <div>{quoteran.quote}</div>
    </div>
    <div className='autor'>
        <h2 className='dire'>{quoteran.author}</h2>
        <button style={{background:quoteranColor.color}} onClick={handleclick}>&#62;</button>
    </div>
   </div>
   </div>
  )
}

export default Arra