import React, {useEffect} from 'react'
import LogIn from '../pages/LogIn'
import "./HomePage.css"
import img1 from "../assets/icon.png"

export const HomePage = () => {
    useEffect(() => {
        setTimeout(() => {
            const topDivs = document.getElementsByClassName('top-div');
            const bgImg1 = document.querySelector(".icon1");

            if (topDivs.length > 0) {
                // Assuming there's only one element with the class 'top-div', select the first one
                const topDiv = topDivs[0];
                topDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Change top div color to transparent
                bgImg1.style.display = "none"
            }
        }, 2000); // Change color after 1 second
    }, []); /// Empty dep
  return (
    <div style={{width: "100%"}} className=''>
        <div className='icon1'>
            <div style={{ height: "100vh" }} className='top-div'>
                <img src={img1} alt="" className='icon1' />
            </div>
        </div>
        <LogIn />
    </div>
  )
}
