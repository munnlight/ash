import MapContainer from "../app/intro/page";
import React, { useEffect } from "react";
import LogIn from "../pages/LogIn";
import "./HomePage.css";
import img1 from "../assets/icon.png";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      const topDivs = document.getElementsByClassName("top-div");
      const bgImg1 = document.querySelector(".icon1");
      const lastCon = document.querySelector(".last-con");

      if (topDivs.length > 0) {
        const topDiv = topDivs[0];
        topDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        bgImg1.style.display = "none";
        lastCon.style.display = "block";
      }
    }, 5000);
  }, []);

  return (
    <div style={{ width: "100%" }} className="">
      <div className="icon1">
        <div style={{ height: "100vh" }} className="top-div">
          <img src={img1} alt="" className="icon2" />
          <p className="end-par">Мэдэхгүй замаа мэдье</p>
        </div>
      </div>
      <div className="last-con" style={{ display: "none" }}>
        <LogIn />
      </div>
    </div>
  );
};
