/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import DashboardCard from "../../components/DashboardCard";
import DashboardChart from "./DashboardChart";
import s1 from "../../assets/dashboard/s1.png";
import s2 from "../../assets/dashboard/s2.png";
import s3 from "../../assets/dashboard/s3.png";
import s4 from "../../assets/dashboard/s4.png";
import { useGetStatsMutation } from "../../features/dashboard/dashboardApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DashCardSkeleton from "../../components/DashCardSkeleton";

const Dashboard = () => {
  const [getStats, { data: { statics } = {} }] = useGetStatsMutation();
  const { user: { position } = {} } = useSelector((state) => state.auth);
  useEffect(() => {
    getStats();
  }, [getStats]);
  let one, two, three, four;
  if (statics?.length > 0) {
    one = statics[0];
    two = statics[1];
    three = statics[2];
    four = statics[3];
  }
  const convertToTitleCase = (str) => {
    return str
      ?.split("_")
      ?.map((word) => word?.charAt(0)?.toUpperCase() + word?.slice(1))
      ?.join(" ");
  };
  return (
    <div className="px-5 py-3 md:py-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {statics?.length > 0 ? (
          <>
            <DashboardCard color={"#4C6FFF"} data={one} img={s1} />
            <div className="shadow-c p-5 rounded-2xl">
              <div className="flex items-center">
                <div>
                  <img src={s2} alt="" />
                </div>
                <div className="ps-3">
                  <h3 className="text-2xl font-bold">{two?.total}</h3>
                  <p className="text-sm text-gray-500">
                    {convertToTitleCase(two?.title)}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div className="w-full h-1 bg-gray-100 rounded-full">
                  <div
                    className={`w-[${two?.progress}%] h-full text-center text-xs text-white bg-[#FE5246] rounded-full`}
                  ></div>
                </div>
                <p className="ps-3">{two?.progress}%</p>
              </div>
            </div>
            <DashboardCard color={"#FBBC28"} data={three} img={s3} />
            <div className="shadow-c p-5 rounded-2xl">
              <div className="flex items-center">
                <div>
                  <img src={s4} alt="" />
                </div>
                <div className="ps-3">
                  <h3 className="text-2xl font-bold">{`${
                    position === "teacher" ? "$" : ""
                  }${four?.total}`}</h3>
                  <p className="text-sm text-gray-500">
                    {convertToTitleCase(four?.title)}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <Link
                  className="text-sm text-blue-500 underline"
                  to={"/courses"}
                >
                  View Courses
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <DashCardSkeleton />
            <DashCardSkeleton />
            <DashCardSkeleton />
            <DashCardSkeleton />
          </>
        )}
      </div>
      <div className="mt-5 shadow-c rounded-2xl">
        <DashboardChart />
      </div>
    </div>
  );
};

export default Dashboard;
