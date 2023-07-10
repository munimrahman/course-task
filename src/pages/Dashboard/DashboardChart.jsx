/* eslint-disable no-unused-vars */
import React from "react";
import Chart from "react-apexcharts";

const DashboardChart = () => {
  const data = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        stacked: true,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      colors: ["#6078EA"],
      fill: {
        gradient: {
          enabled: true,
          opacityFrom: 0.6,
          opacityTo: 0.2,
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy",
        },
      },
    },
  };
  return (
    <div className="w-[99%] py-5">
      <Chart
        options={data.options}
        series={data.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default DashboardChart;
