import React from 'react'
import { useStateContext } from '../contexts/contextProvide'

const Button = ({bgColor,color,size,text,borderRadius,icon,value}) => {
  const {closeHandle} =useStateContext();
  return (
    <button type='button'
    style={{background:bgColor,color:color,borderRadius:borderRadius}}
    className={`text-${size} p-3 hover:drop-shadow-xl`}
    onClick={()=>closeHandle(value)}
    >{icon} {text}</button>

  )
}

export default Button