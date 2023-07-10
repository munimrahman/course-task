/* eslint-disable no-unused-vars */
import React from "react";
import img from "../assets/Image.png";
import shape from "../assets/Shape.png";

const CourseCard = () => {
  return (
    <div className="p-2 rounded-lg bg-white shadow-c relative">
      <img src={img} alt="" className="w-full" />
      <h2 className="mb-3 mt-2 text-sm">Learning Maxon 4D Training Course</h2>
      <div className="flex justify-between mb-2">
        <div className="flex items-center">
          <figure className="">
            <img src={shape} alt="" className="" />
          </figure>
          <span className="text-sm text-gray-500">15 Lessons (10h 5m)</span>
        </div>
        <p className="bg-[#6078EA] text-white rounded px-2">$140</p>
      </div>
      <p className="bg-white text-[#102844] text-sm absolute top-3 right-3 rounded px-1">
        4D Animation
      </p>
    </div>
  );
};

export default CourseCard;
