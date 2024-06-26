import React, {useState} from 'react'
import "./BottomNav.css"
export const BottomNav = ({buttonText, icon, onClick}) => {

  return (
    <div className='bottom-nav'>
        <button className="" onClick={onClick} >{icon}</button>
        <p className='text-center'>{buttonText}</p>
    </div>
  )
}
