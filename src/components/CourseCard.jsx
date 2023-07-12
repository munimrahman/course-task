/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import img from "../assets/Image.png";
import shape from "../assets/Shape.png";
import { Link } from "react-router-dom";

const CourseCard = ({ course, index }) => {
  const { id, lesson_name, price, tags, main_course_file } = course || {};
  let tagContent;
  if (typeof tags === "string") {
    tagContent = tags;
  } else if (Array.isArray(tags)) {
    tagContent = tags[0];
  }

  return (
    <div className="p-2 rounded-lg bg-white shadow-c relative">
      <Link to={`/courses/${index + 1}`}>
        <img src={main_course_file} alt="" className="w-full h-48" />
        {/* </Link>
      <Link to={`/courses/${id}`}> */}
        <h2 className="mb-3 mt-2 text-sm hover:text-[#6078EA]">
          {lesson_name}
        </h2>
      </Link>

      <div className="flex justify-between mb-2">
        <div className="flex items-center">
          <figure className="">
            <img src={shape} alt="" className="" />
          </figure>
          <span className="text-sm text-gray-500">15 Lessons (10h 5m)</span>
        </div>
        <p className="bg-[#6078EA] text-white rounded px-2">${price}</p>
      </div>
      <p className="bg-white text-[#102844] text-sm absolute top-3 right-3 rounded px-1">
        {tagContent}
      </p>
    </div>
  );
};

export default CourseCard;
