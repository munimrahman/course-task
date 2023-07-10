/* eslint-disable no-unused-vars */
import React from "react";
import DashboardCard from "../../components/DashboardCard";
import DashboardChart from "./DashboardChart";

const Dashboard = () => {
  return (
    <div className="px-5 py-3 md:py-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
      <div className="mt-5 shadow-c rounded-2xl">
        <DashboardChart />
      </div>
    </div>
  );
};

export default Dashboard;
