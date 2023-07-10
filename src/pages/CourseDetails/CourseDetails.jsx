/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import courseImg from "../../assets/Video.png";
import person from "../../assets/person.png";
import Comment from "./Comment";
import CommentBox from "./CommentBox";

const CourseDetails = () => {
  const [overview, setOverview] = useState(true);
  const [curriculum, setCurriculum] = useState(false);

  const handleShowOverview = () => {
    setOverview(true);
    setCurriculum(false);
  };

  const handleShowCurriculum = () => {
    setOverview(false);
    setCurriculum(true);
  };
  const activeBtn = "bg-[#FF7800] text-white rounded-full px-4 py-1 shadow-c";
  const inactiveBtn = "rounded-full px-4 py-1 shadow-c";
  return (
    <div className="bg-[#F7F8FE] min-h-screen mb-5">
      <div className="bg-white px-5 pt-3 md:pt5">
        <h2 className="text-2xl font-bold">Discover</h2>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li className="text-primary">Course Details Page</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 px-5 pt-3 md:pt5 gap-5">
        {/* main */}
        <div className="col-span-9 border p-3 bg-white rounded-lg">
          <figure>
            <img src={courseImg} alt="" />
          </figure>
          <h1 className="text-xl mt-5 mb-1">
            Artificial Intelligence & Machine Learning
          </h1>
          <p className="text-sm text-gray-500">
            By <span className="font-bold text-black">Simon Shaw</span>,
            Illustrator and 3D designer
          </p>
          <div className="flex items-center my-3">
            <figure>
              <img src={person} alt="" className="w-2/3" />
            </figure>
            <span className="-ms-2">Simon Shaw</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleShowOverview}
              className={overview ? activeBtn : inactiveBtn}
            >
              Overview
            </button>

            <button
              onClick={handleShowCurriculum}
              className={curriculum ? activeBtn : inactiveBtn}
            >
              Curriculum
            </button>
          </div>
          {/* overview */}
          {overview && (
            <div className="my-3 text-[#333333]">
              <p>
                IBM is the second-largest Predictive, consectetur adipiscing
                elit. Sit turpis egestas aenean amet ac rhoncus vitae tristique.
                A sed magna vitae nullam. Accumsan ullamcorper amet congue
                fermentum egestas purus molestie nam. Dolor, dictumst mauris
                vestibulum vehicula vel cras. Pellentesque nam congue auctor
                dolor mattis erat. Pharetra feugiat in justo purus dolor feugiat
                ultrices.{" "}
              </p>
              <br />
              <p>
                Pretium at parturient curabitur eget nunc pharetra. Vitae
                pharetra adipiscing purus faucibus bibendum. Ultrices mi
                tristique et enim pretium lacus, vivamus. Augue eget fermentum,
                mauris viverra. Tristique arcu ipsum risus a arcu pellentesque
                pharetra velit.
              </p>
              <br />
              <p>
                Neque, erat tristique volutpat faucibus mattis vulputate
                faucibus. Ut phasellus nulla at sociis est, turpis purus.
                Faucibus donec malesuada tristique quam commodo felis nulla.
              </p>
            </div>
          )}
          {/* curriculum */}
          {curriculum && (
            <div>
              <p>Course Curriculum</p>
            </div>
          )}

          <div className="divider"></div>
          {/* comments */}
          <div>
            <h2 className="text-xl pb-2">Reviews</h2>
            <Comment />
            <Comment />
            <CommentBox />
          </div>
        </div>
        {/* sidebar */}
        <div className="col-span-3 border p-3 bg-white rounded-lg">
          {/* overview */}
          {overview && (
            <div className="border">
              <p>Overview</p>
            </div>
          )}
          {/* curriculum */}
          {curriculum && (
            <div>
              <p>curriculum</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
