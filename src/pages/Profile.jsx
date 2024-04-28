import React from "react";
import oil from "../assets/oil.jpeg";
import gas from "../assets/gasStation.jpeg";
import voucher from "../assets/voucher.jpeg";
import { RealHome } from "./RealHome";
import { BottomNav } from "../component/BottomNav";
import { useNavigate } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { GrHomeRounded } from "react-icons/gr";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import "./Profile.css";

export const Profile = () => {
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

  const backHome = () => {
    navigate("/home");
  }
  return (
    <div className="bg-gradient-to-bl from-[#B67352] to-[#8CB9BD] w-full h-screen">
      <div className='title-con '>
        <button onClick={backHome}><IoIosArrowBack size={25} /></button>
        <h1 className='appbar'>БАЙРШИЛ НЭМЭХ</h1>
      </div>
      <div className="text-center">
        <div className="d-flex pro-div mt-5">
          <div className="pro-user"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB7XlVxADxmRLShFjlDVdgn3rf-tz2YqicEbBIoUiVSw&s" alt="" className="pro-img" /></div>
          <div className=""><p className="pro-p">Хариуцлагатай жолооч</p></div>
        </div>
        <div className="flex flex-col mx-12 my-4 mt-5">
          <div className="text-left border-2 text-slate-200 border-sky-500 p-3 mx-2 my-3 rounded-lg bg-slate-700 ">
            Нэр:
          </div>
          <div className="text-left border-2 text-slate-200 border-sky-500 p-3 mx-2 my-3 rounded-lg bg-slate-700 ">
            Утас:
          </div>
          <div className="text-left border-2 text-slate-200 border-sky-500 p-3 mx-2 my-3 rounded-lg bg-slate-700 ">
            Мейл:
          </div>
          <div className="text-left border-2 text-slate-200 border-sky-500 p-3 mx-2 my-3 rounded-lg bg-slate-700 ">
            Цуглуулсан оноо:
          </div>
          <div className="text-slate-100 hover:bg-[#dcA549] cursor-pointer bg-[#ECB159] mx-2 my-3 p-2 rounded-lg">
            Өөрчлөх
          </div>
        </div>
       
        <div className='d-flex bottom-div'>
          <BottomNav icon={<IoCameraOutline size={45} onClick={toAdd} />} />
          <div className="text-4xl text-slate-200">|</div>
          <BottomNav icon={<GrHomeRounded size={40} />} onClick={toHome} />
          <div className="text-4xl text-slate-200">|</div>
          <BottomNav icon={<FaRegUser size={40} onClick={toProfile} />} />
        </div>
      </div>
      {/* <RealHome /> */}
    </div>
  );
};
