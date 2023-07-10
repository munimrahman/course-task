/* eslint-disable no-unused-vars */
import React from "react";
import s1 from "../assets/dashboard/s1.png";

const DashboardCard = () => {
  return (
    <div className="shadow-c p-5 rounded-2xl">
      <div className="flex items-center">
        <div>
          <img src={s1} alt="" />
        </div>
        <div className="ps-3">
          <h3 className="text-2xl font-bold">55</h3>
          <p className="text-sm text-gray-500">Course Completed</p>
        </div>
      </div>
      <div className="flex items-center mt-4">
        {/* <progress className="progress w-full" value={70} max="100"></progress> */}
        <div className="w-full h-1 bg-gray-100 rounded-full">
          <div className="w-[70%] h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
        </div>
        <p className="ps-3">70%</p>
      </div>
    </div>
  );
};

export default DashboardCard;
