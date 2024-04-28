import React from "react";
import oil from "../assets/oil.jpeg";
import gas from "../assets/gasStation.jpeg";
import voucher from "../assets/voucher.jpeg";
import { RealHome } from "./RealHome";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="bg-gradient-to-bl from-[#B67352] to-[#8CB9BD] w-full h-screen">
      <div className="text-center">
        <div>
          <h2 className="text-white font-medium text-3xl pt-12">Хувийн мэдээлэл</h2>
        </div>
        <div className="flex flex-col mx-12 my-4">
          <div className="text-left border-2 text-slate-200 border-sky-500 p-2 mx-2 my-3 rounded-lg bg-slate-700 ">
            Нэр:
          </div>
          <div className="text-left border-2 text-slate-200 border-sky-500 p-2 mx-2 my-3 rounded-lg bg-slate-700 ">
            Утас:
          </div>
          <div className="text-left border-2 text-slate-200 border-sky-500 p-2 mx-2 my-3 rounded-lg bg-slate-700 ">
            Мейл:
          </div>
          <div className="text-left border-2 text-slate-200 border-sky-500 p-2 mx-2 my-3 rounded-lg bg-slate-700 ">
            Цуглуулсан оноо:
          </div>
          <div className="text-slate-100 hover:bg-[#dcA549] cursor-pointer bg-[#ECB159] mx-2 my-3 p-2 rounded-lg">
            Өөрчлөх
          </div>
        </div>
        <div className="mx-14 my-8 bg-slate-500 rounded-xl  ">
          <div className="grid grid-cols-3 p-4">
            <div className="m-2">
              <img className="object-cover w-full h-3/4 " src={gas} alt="gasStation.jpeg" />
              <div className="mt-1">
                25/200
                <div className="mt-1 bg-[#ecb159] rounded-lg ">Авах</div>
              </div>
            </div>
            <div className="m-2">
              <img className="object-cover w-full h-3/4 " src={oil} alt="oil.jpeg" />
              <div className="mt-1">
                25/100
                <div className="mt-1 bg-[#ecb159] rounded-lg">Авах</div>
              </div>
            </div>
            <div className="m-2">
              <img className="object-cover w-full h-3/4 " src={voucher} alt="voucher.jpeg" />
              <div className="mt-1">
                25/100
                <div className="mt-1 bg-[#ecb159] rounded-lg">Авах</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RealHome />
    </div>
  );
};
