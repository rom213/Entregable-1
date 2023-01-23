import React, { useState } from 'react'
import quotes from '../json/quotes.json'
import colors from '../json/colors.json'
import Arra from './Arra';
import App from '../App';


const Aleatorio = () => {

    const random=arr=>{
        const ran=Math.floor(Math.random()*arr.length)
        return arr[ran];
    }
    const [quoteran, setquoteran] = useState(random(quotes))
    
    const randomColors=arr=>{
        const ran=Math.floor(Math.random()*arr.length)
        return arr[ran];
    }
    const [quoteranColor, setquoteranColor] = useState(random(colors))
    

    const handleclick=()=>{
        setquoteranColor(randomColors(colors))
        setquoteran(random(quotes))
    }
  return (
    <div >
        <Arra
        quoteran={quoteran}
        handleclick={handleclick} 
        quoteranColor={quoteranColor}
        />

    </div>
  )
}

export default Aleatorio