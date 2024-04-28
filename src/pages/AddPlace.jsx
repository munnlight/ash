import React from 'react'
import './addPlace.css'
import { FaCamera } from 'react-icons/fa'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCloudUploadOutline } from "react-icons/io5";


export const AddPlace = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/home");
  }
  return (

    <div className="main-con1">
      <div className='title-con'>
        <button onClick={backHome}><IoIosArrowBack size={25}/></button>
        <h1 className='appbar'>БАЙРШИЛ НЭМЭХ</h1>
      </div>
      <div className='take-photo'>
        <div className='inner-photo'>
          <IoCloudUploadOutline size={50} />
          DROP FILE HERE OR BROWSE
        </div>
      </div>
      <div><Alert className='bg-success mx-2 mt-5'>Санамж: Хэрэглэгч та бусдын эрүүл мэнд болоод эд хөрөнгийн хохиролд өртөхөөс сэргийлж үнэн зөв мэдээлэл оруулахыг хүсье.Tань оруулсан зураг бүрийг бид нэг нэгэнгүй шалгаж, үнэн зөв мэдээлэл оруулсан бол таньд оноо өгөх болно.</Alert></div>
    </div>
  )
}
