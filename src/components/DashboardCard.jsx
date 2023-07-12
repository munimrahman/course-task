/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const DashboardCard = ({ data, img, color }) => {
  const { title, total, progress } = data || {};

  const convertToTitleCase = (str) => {
    return str
      ?.split("_")
      ?.map((word) => word?.charAt(0)?.toUpperCase() + word?.slice(1))
      ?.join(" ");
  };

  return (
    <div className="shadow-c p-5 rounded-2xl">
      <div className="flex items-center">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="ps-3">
          <h3 className="text-2xl font-bold">{total}</h3>
          <p className="text-sm text-gray-500">{convertToTitleCase(title)}</p>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-full h-1 bg-gray-100 rounded-full">
          <div
            className={`w-[${progress}%] h-full text-center text-xs text-white bg-[${color}] rounded-full`}
          ></div>
        </div>
        <p className="ps-3">{progress}%</p>
      </div>
    </div>
  );
};

export default DashboardCard;
