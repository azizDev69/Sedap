import React, { useState } from "react";
import Title from "../components/Title";
import ContainerTemplate from "../components/Container";
import FilterData from "../components/FilterData";
import { BsThreeDotsVertical } from "react-icons/bs";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const [data, setData] = useState([
    {
      img: "./public/list.png",
      number: 75,
      title: "Total orders",
      percentage: 4,
      days: 18,
    },
    {
      img: "./public/list.png",
      number: 224,
      title: "Total Delivered",
      percentage: 4,
      days: 18,
    },
    {
      img: "./public/list.png",
      number: 65,
      title: "Total cenceled",
      percentage: -8,
      days: 18,
    },
    {
      img: "./public/list.png",
      number: 19949000,
      title: "Total Revenue",
      percentage: -4,
      days: 18,
    },
  ]);

  const [loading, setLoading] = useState(false);
  const totalCanceled = data.find(item => item.title === "Total cenceled").number || 0;
  const totalOrders = data.find(item => item.title === "Total orders").number / 100 || 0;
  const totalPull = totalOrders * totalCanceled;
  const cancelPercentage = 100 - totalPull;


  return (
    <ContainerTemplate>
      <div>
        <div className="flex justify-between items-center my-5">
          <Title title="Dashborad" description="Hi, Abdulaziz. Welcome back to Sedap Admin!" />
          <FilterData />
        </div>
        <div className="grid grid-cols-4 items-center gap-5">
          {loading ? (
            <>
              <div className="skeleton flex-1 min-h-44 border border-primary shadow-xl"></div>
              <div className="skeleton flex-1 min-h-44 border border-primary shadow-xl"></div>
              <div className="skeleton flex-1 min-h-44 border border-primary shadow-xl"></div>
              <div className="skeleton flex-1 min-h-44 border border-primary shadow-xl"></div>
            </>
          ) : data.length ? (
            data.map((item, id) => (
              <div
                key={id}
                className="bg-base-100 text-sm h-32 flex items-center gap-3 px-5 shadow-xl border-spacing-0.5 border-[0.2px] border-primary rounded-xl"
              >
                <div className="rounded-full bg-base-300">
                  <img className="w-20 p-5" src={item.img} alt="" />
                </div>
                <div className="text-right flex-1">
                  <p className={`font-bold ${String(item.number).length > 6 ? "text-sm text-nowrap" : "text-xl"} `}>
                    {item.title.includes("Revenue")
                      ? Number(item.number).toLocaleString("Ru-ru") + " UZS"
                      : item.number} 
                  </p>
                  <p className="">{item.title}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">Data Not Found</div>
          )}
        </div>

        <div className="mt-5">
          <div className="bg-base-100 p-5">
            <div className="flex justify-between">
              <h1>Pie Chart</h1>
              <div className="flex items-center">
                <label className="fieldset-label">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  Remember me
                  <input type="checkbox" defaultChecked className="checkbox" />
                  Remember me
                </label>
                <p>
                  <BsThreeDotsVertical />
                </p>
              </div>
            </div>
            <div className="radial-progress text-error bg-red-100 bg-opacity-30 border-primary " style={{ "--value": cancelPercentage, "--size": "9rem", "--thickness": "2rem" }}>
              <span className="size-20 bg-base-100 flex items-center justify-center rounded-full">
                {cancelPercentage}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </ContainerTemplate>
  );
};

export default Dashboard;
