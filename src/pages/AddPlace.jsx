import React from 'react'
import './addPlace.css'
import { FaCamera } from 'react-icons/fa'
import { IoIosArrowBack } from "react-icons/io";
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCloudUploadOutline } from "react-icons/io5";
import { BottomNav } from "../component/BottomNav";
import { useNavigate } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { GrHomeRounded } from "react-icons/gr";
import { IoCameraOutline } from "react-icons/io5";


export const AddPlace = () => {
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

    <div className="main-con1 bg-gradient-to-bl from-[#B67352] to-[#8CB9BD]">
      <div className='title-con '>
        <button onClick={backHome}><IoIosArrowBack size={25}/></button>
        <h1 className='appbar'>БАЙРШИЛ НЭМЭХ</h1>
      </div>
      <div className='take-photo'>
        <div className='inner-photo'>
          <IoCloudUploadOutline size={50} />
          DROP FILE HERE OR BROWSE
        </div>
      </div>
      <p className='border rounded mt-5 mx-4 p-5  text-black'>Санамж: Хэрэглэгч та бусдын эрүүл мэнд болоод эд хөрөнгийн хохиролд өртөхөөс сэргийлж үнэн зөв мэдээлэл оруулахыг хүсье.Tань оруулсан зураг бүрийг бид нэг нэгэнгүй шалгаж, үнэн зөв мэдээлэл оруулсан бол таньд оноо өгөх болно.</p>
      <div className='d-flex bottom-div'>
        <BottomNav icon={<IoCameraOutline size={45} onClick={toAdd} />} />
        <div className="text-4xl text-slate-200">|</div>
        <BottomNav icon={<GrHomeRounded size={40} />} onClick={toHome} />
        <div className="text-4xl text-slate-200">|</div>
        <BottomNav icon={<FaRegUser size={40} onClick={toProfile} />} />
      </div>
    </div>
  )
}
