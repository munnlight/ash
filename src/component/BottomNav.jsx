import React, { useState } from "react";
import "./BottomNav.css";
export const BottomNav = ({ classes, icon, onClick, bg }) => {
  return (
    <div className="bottom-nav">
      <button className={`text-white z-20`} py-2 onClick={onClick}>
        {icon}
      </button>
    </div>
  );
};
