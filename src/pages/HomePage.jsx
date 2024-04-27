import React, {useEffect, usesta} from 'react'
import MapContainer from '../app/intro/page'
import "./HomePage.css"
import img1 from "../assets/icon.png"
import { BottomNav } from '../component/BottomNav'
import { MdAddCircleOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { useNavigate } from 'react-router-dom';


export const HomePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            const topDivs = document.getElementsByClassName('top-div');
            const bgImg1 = document.querySelector(".icon1");
            const lastCon = document.querySelector(".last-con");

            if (topDivs.length > 0) {
                // Assuming there's only one element with the class 'top-div', select the first one
                const topDiv = topDivs[0];
                topDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Change top div color to transparent
                bgImg1.style.display = "none"
                lastCon.style.display = "block"
            }
        }, 5000); // Change color after 1 second
    }, []); /// Empty dep
    const toAdd = () => {
        navigate("/add")
    }
    const toHome = () => {
        navigate("/")
    }
    const toProfile = () => {
        navigate("/profile")
    }
  return (
    <div style={{width: "100%"}} className=''>
        <div className='icon1'>
            <div style={{ height: "100vh" }} className='top-div'>
                <img src={img1} alt="" className='icon2' />
                <p className='end-par'>Мэдэхгүй замаа мэдье</p>
            </div>
        </div>
        <div className='last-con' style={{display: "none"}}>
            <MapContainer />
              <div className='bottom-div'>
                  <BottomNav buttonText={"Add place"} icon={<MdAddCircleOutline size={50} onClick={toAdd} />}/>
                  <BottomNav buttonText={"Home"} icon={<GoHome  size={50}/>} onClick={toHome} />
                  <BottomNav buttonText={"Profile"} icon={<FaRegUser size={50} onClick={toProfile}/>} />
              </div>
        </div>
    </div>
  )
}
