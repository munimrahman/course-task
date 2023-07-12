/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard";
import filterImg from "../../assets/filter.png";
import boxImg from "../../assets/box.png";
import { useGetCoursesMutation } from "../../features/courses/coursesApi";
import CardSkeleton from "../../components/CardSkleton";

const Courses = () => {
  const [getCourses, { data: { send_res } = {}, isLoading }] =
    useGetCoursesMutation();

  useEffect(() => {
    getCourses({
      perpage: 10,
      page: 1,
    });
  }, [getCourses]);

  let content;
  if (isLoading) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-4 px-5 pt-3 md:pt5 gap-3">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  } else if (send_res?.length > 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-4 px-5 pt-3 md:pt5 gap-3">
        {send_res?.map((course, i) => (
          <CourseCard key={course.id} course={course} index={i} />
        ))}
      </div>
    );
  } else {
    content = (
      <>
        <p className="text-red-500 text-2xl text-center mt-14">Sorry!</p>
        <p className="text-red-500 text-2xl text-center">
          Something Went Wrong!
        </p>
      </>
    );
  }
  return (
    <div className="bg-[#F7F8FE] min-h-screen mb-5">
      <div className="bg-white px-5 pt-3 md:pt5">
        <h2 className="text-2xl font-bold">Discover</h2>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li className="text-primary">Courses</li>
          </ul>
        </div>
      </div>
      {/* filter */}
      <div className="flex justify-between px-5 pt-3 md:pt5">
        <div className="flex">
          <div className="border rounded px-2 py-1 mx-1 bg-white">
            <span className="text-sm hidden md:inline-block">Sort By:</span>
            <select
              name=""
              id=""
              className="bg-white focus:outline-none text-sm hover:cursor-pointer text-gray-500"
            >
              <option value="">Popular</option>
              <option value="">Newest Post</option>
              <option value="">Rating</option>
              <option value="">Salary</option>
            </select>
          </div>

          <div className="border rounded px-2 py-1 mx-1 bg-white">
            <span className="text-sm hidden md:inline-block">Category:</span>
            <select
              name=""
              id=""
              className="bg-white text-gray-500 focus:outline-none text-sm hover:cursor-pointer"
            >
              <option value="">Animation</option>
              <option value="">Web Design</option>
              <option value="">MERN Stack</option>
            </select>
          </div>
        </div>
        <div className="md:flex hidden">
          <div className="border rounded px-2 py-1 mx-1 bg-white flex items-center">
            <figure>
              <img src={filterImg} alt="" className="w-9/12" />
            </figure>
            <span className="text-sm text-gray-500">Filter</span>
          </div>

          <div className="border rounded px-2 py-1 mx-1 bg-white flex items-center justify-center">
            <img src={boxImg} alt="" className="w-10/12" />
          </div>
        </div>
      </div>
      {content}
    </div>
  );
};

export default Courses;
