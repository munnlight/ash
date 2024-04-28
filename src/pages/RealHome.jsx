import React from "react";
import MapContainer from "../app/intro/page";
import { BottomNav } from "../component/BottomNav";
import { useNavigate } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { GrHomeRounded } from "react-icons/gr";
import { IoCameraOutline } from "react-icons/io5";
import "./HomePage.css";

export const RealHome = () => {
  const navigate = useNavigate();
  const toAdd = () => {
    navigate("/add");
  };
  const toHome = () => {
    navigate("/home");
  };
  const toProfile = () => {
    navigate("/profile");
  };
  return (
    <div>
      <MapContainer />
      <div className="bottom-div">
        <BottomNav icon={<IoCameraOutline size={45} onClick={toAdd} />} />
        <div className="text-4xl text-slate-200">|</div>
        <BottomNav icon={<GrHomeRounded size={40} />} onClick={toHome} />
        <div className="text-4xl text-slate-200">|</div>
        <BottomNav icon={<FaRegUser size={40} onClick={toProfile} />} />
      </div>
    </div>
  );
};
