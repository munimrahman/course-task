/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import courseImg from "../../assets/Video.png";
import person from "../../assets/person.png";
import Comment from "./Comment";
import CommentBox from "./CommentBox";
import icon1 from "../../assets/icon/Icon.png";
import icon2 from "../../assets/icon/Icon2.png";
import icon3 from "../../assets/icon/Icon3.png";
import icon4 from "../../assets/icon/Icon4.png";
import icon5 from "../../assets/icon/Icon5.png";
import icon6 from "../../assets/icon/Icon6.png";
import icon7 from "../../assets/icon/Icon7.png";
import icon8 from "../../assets/icon/Icon8.png";
import cart from "../../assets/cart.png";
import tick from "../../assets/Icon-t.png";
import play from "../../assets/play-icon.png";

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

      <div className="grid grid-cols-1 md:grid-cols-12 px-5 py-3 md:pt5 gap-3">
        {/* main */}
        <div className="md:col-span-9 p-3 bg-white rounded-lg">
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
          <div className="flex items-center justify-between my-3">
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
              <div className="bg-[#F8F8FB] p-5 my-5 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-5">
                <div className="col-span-9">
                  <p className="text-sm text-gray-500">Course 1 of 6</p>
                  Course 1 - Introduction
                  <div className="w-full h-1 bg-gray-200 rounded-full my-3">
                    <div className="w-[70%] h-full text-center text-xs text-white bg-[#FF7800] rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-500">
                    2 completed units of 11 available
                  </p>
                </div>
                <div className="col-span-3 md:text-right">
                  <button className="bg-[#4C6FFF] text-white px-3 py-2 rounded">
                    Go to Unit 3
                  </button>
                </div>
              </div>
              {/* class details */}
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-lg font-medium">
                  Lesson 1 - Introduction
                </div>
                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <table className="table">
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <td>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <figure>
                                  <img src={play} alt="" className="w-10/12" />
                                </figure>
                                <p className="ps-1">U1: Presentation</p>
                              </div>
                              <figure>
                                <img src={tick} alt="" />
                              </figure>
                            </div>
                          </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <td>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <figure>
                                  <img src={play} alt="" className="w-10/12" />
                                </figure>
                                <p className="ps-1">
                                  U2: Job opportunities (career profile)
                                </p>
                              </div>
                              <figure>
                                <img src={tick} alt="" />
                              </figure>
                            </div>
                          </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <td>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <figure>
                                  <img src={play} alt="" className="w-10/12" />
                                </figure>
                                <p className="ps-1">
                                  U2: How to get the most out of this course!
                                </p>
                              </div>
                              <figure>
                                <img src={tick} alt="" />
                              </figure>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <hr />
              </div>
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-lg font-medium">
                  Lesson 2 - Learn Manufacturing
                </div>
                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <table className="table">
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <td>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <figure>
                                  <img src={play} alt="" className="w-10/12" />
                                </figure>
                                <p className="ps-1">U1: Presentation</p>
                              </div>
                              <figure>
                                <img src={tick} alt="" />
                              </figure>
                            </div>
                          </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <td>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <figure>
                                  <img src={play} alt="" className="w-10/12" />
                                </figure>
                                <p className="ps-1">
                                  U2: Job opportunities (career profile)
                                </p>
                              </div>
                              <figure>
                                <img src={tick} alt="" />
                              </figure>
                            </div>
                          </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <td>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <figure>
                                  <img src={play} alt="" className="w-10/12" />
                                </figure>
                                <p className="ps-1">
                                  U2: How to get the most out of this course!
                                </p>
                              </div>
                              <figure>
                                <img src={tick} alt="" />
                              </figure>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <hr />
              </div>
              <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-lg font-medium">
                  Lesson 3 - Field Experience testing modules & investers!
                </div>
                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <table className="table">
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <td>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <figure>
                                  <img src={play} alt="" className="w-10/12" />
                                </figure>
                                <p className="ps-1">U1: Presentation</p>
                              </div>
                              <figure>
                                <img src={tick} alt="" />
                              </figure>
                            </div>
                          </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <td>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <figure>
                                  <img src={play} alt="" className="w-10/12" />
                                </figure>
                                <p className="ps-1">
                                  U2: Job opportunities (career profile)
                                </p>
                              </div>
                              <figure>
                                <img src={tick} alt="" />
                              </figure>
                            </div>
                          </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <td>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <figure>
                                  <img src={play} alt="" className="w-10/12" />
                                </figure>
                                <p className="ps-1">
                                  U2: How to get the most out of this course!
                                </p>
                              </div>
                              <figure>
                                <img src={tick} alt="" />
                              </figure>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <hr />
              </div>
              {/* class details ends*/}
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
        <div className="md:col-span-3 p-3 bg-white rounded-lg">
          {/* overview */}
          {overview && (
            <div>
              <h3 className="text-[#102844] font-bold mb-2 text-lg">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#F8F8FB] text-[#767278] px-2 rounded shadow-md">
                  Sketch
                </span>
                <span className="bg-[#F8F8FB] text-[#767278] px-2 rounded shadow-md">
                  React
                </span>
                <span className="bg-[#F8F8FB] text-[#767278] px-2 rounded shadow-md">
                  MERN
                </span>
                <span className="bg-[#F8F8FB] text-[#767278] px-2 rounded shadow-md">
                  Node Js
                </span>
              </div>
              <div className="mt-5">
                <h3 className="text-[#102844] text-lg mb-2 font-bold">
                  What you’ll learn
                </h3>
                <p className="text-[#767278] text-sm">
                  Access to IBM Cloud modelling what is I was looking for and
                  Aaron got me the solution.
                </p>
                <hr className="mt-5" />
              </div>
              <div className="mt-5">
                <h3 className="text-[#102844] text-lg mb-2 font-bold">
                  This course includes:
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <figure>
                      <img src={icon1} alt="" />
                    </figure>
                    <p className="text-sm ps-1 text-[#102844]">
                      100% Positive reviews (45)
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <figure>
                      <img src={icon2} alt="" />
                    </figure>
                    <p className="text-sm ps-1 text-[#102844]">2167 students</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <figure>
                      <img src={icon3} alt="" />
                    </figure>
                    <p className="text-sm ps-1 text-[#102844]">
                      59 Lessons (9h 11m)
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <figure>
                      <img src={icon4} alt="" />
                    </figure>
                    <p className="text-sm ps-1 text-[#102844]">6 courses</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <figure>
                      <img src={icon5} alt="" />
                    </figure>
                    <p className="text-sm ps-1 text-[#102844]">
                      70 downloads (70 files)
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <figure>
                      <img src={icon6} alt="" />
                    </figure>
                    <p className="text-sm ps-1 text-[#102844]">
                      Available from the app
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <figure>
                      <img src={icon7} alt="" />
                    </figure>
                    <p className="text-sm ps-1 text-[#102844]">
                      Audio: Spanish
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <figure>
                      <img src={icon8} alt="" />
                    </figure>
                    <p className="text-sm ps-1 text-[#102844]">
                      Level:{" "}
                      <span className="bg-[#FFEFE0] text-[#FF7800] px-2 rounded py-[2px]">
                        Beginner
                      </span>
                    </p>
                  </div>
                </div>
                <hr className="mt-5" />
              </div>
              <div className="mt-5">
                <p className="border-2 border-dashed text-center bg-[#F8F8FB] py-5 rounded-2xl text-xl font-bold">
                  USD $199.00{" "}
                  <span className="strikethrough text-base font-normal text-gray-500">
                    $250
                  </span>
                </p>
                <div className="flex justify-center mt-3 bg-[#4C6FFF] rounded-md py-3 cursor-pointer">
                  <button className="text-white flex rounded-md gap-2">
                    <figure>
                      <img src={cart} alt="" />
                    </figure>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* curriculum */}
          {curriculum && (
            <div>
              <h3 className="text-[#102844] font-bold mb-2 text-lg">
                Basics Overview
              </h3>
              <h3 className="text-[#767278] text-sm">
                COURSE 1 - INTRODUCTION
              </h3>
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-center justify-between">
                  <div className="flex text-sm items-center">
                    <span className="flex rounded-full px-1 bg-[#E9EDFF]">
                      U1
                    </span>
                    <p className="ps-1">Presentation</p>
                  </div>
                  <figure>
                    <img src={tick} alt="" />
                  </figure>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex text-sm items-center">
                    <span className="flex rounded-full px-1 bg-[#E9EDFF]">
                      U2
                    </span>
                    <p className="ps-1">Job opportunities...</p>
                  </div>
                  <figure>
                    <img src={tick} alt="" />
                  </figure>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex text-sm items-center">
                    <span className="flex rounded-full px-1 bg-[#E9EDFF]">
                      U3
                    </span>
                    <p className="ps-1">How to get the most...</p>
                  </div>
                  <figure>
                    <img src={tick} alt="" />
                  </figure>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex text-sm items-center">
                    <span className="flex rounded-full px-1 bg-[#E9EDFF]">
                      U4
                    </span>
                    <p className="ps-1">How to get the most...</p>
                  </div>
                  <figure>
                    <img src={tick} alt="" />
                  </figure>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-[#767278] text-sm">
                  COURSE 2 - Learn Manufacturing
                </h3>
                <div className="flex flex-col gap-3 mt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex text-sm items-center">
                      <span className="flex rounded-full px-1 bg-[#E9EDFF]">
                        U1
                      </span>
                      <p className="ps-1">Spontaneous chara...</p>
                    </div>
                    <figure>
                      <img src={tick} alt="" />
                    </figure>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex text-sm items-center">
                      <span className="flex rounded-full px-1 bg-[#E9EDFF]">
                        U2
                      </span>
                      <p className="ps-1">Deformers</p>
                    </div>
                    <figure>
                      <img src={tick} alt="" />
                    </figure>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex text-sm items-center">
                      <span className="flex rounded-full px-1 bg-[#E9EDFF]">
                        U3
                      </span>
                      <p className="ps-1">Mograph (cloner)</p>
                    </div>
                    <figure>
                      <img src={tick} alt="" />
                    </figure>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex text-sm items-center">
                      <span className="flex rounded-full px-1 bg-[#E9EDFF]">
                        U4
                      </span>
                      <p className="ps-1">How to get the most...</p>
                    </div>
                    <figure>
                      <img src={tick} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p className="border-2 border-dashed text-center bg-[#F8F8FB] py-5 rounded-2xl text-xl font-bold">
                  USD $199.00{" "}
                  <span className="strikethrough text-base font-normal text-gray-500">
                    $250
                  </span>
                </p>
                <div className="flex justify-center mt-3 bg-[#4C6FFF] rounded-md py-3 cursor-pointer">
                  <button className="text-white flex rounded-md gap-2">
                    <figure>
                      <img src={cart} alt="" />
                    </figure>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
