import React from 'react'
import MapContainer from '../app/intro/page'
import { BottomNav } from '../component/BottomNav'
import { useNavigate } from 'react-router-dom';
import { MdAddCircleOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import "./HomePage.css"

export const RealHome = () => {
    const navigate = useNavigate();
    const toAdd = () => {
        navigate("/add")
    }
    const toHome = () => {
        navigate("/home")
    }
    const toProfile = () => {
        navigate("/profile")
    }
  return (
    <div>
        <MapContainer />
          <div className='bottom-div'>
              <BottomNav buttonText={"Add place"} icon={<MdAddCircleOutline size={50} onClick={toAdd} />} />
              <BottomNav buttonText={"Home"} icon={<GoHome size={50} />} onClick={toHome} />
              <BottomNav buttonText={"Profile"} icon={<FaRegUser size={50} onClick={toProfile} />} />
          </div>
    </div>
  )
}
