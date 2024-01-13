"use client";
import { useEffect, useState } from "react";
import NavBar from "../navBar";
import LaunchCard from "./launchCard";
import "../globals.css";
import Leftnav from "./LeftNavBar";
import { FaSearch } from "react-icons/fa";
export default function Launches() {
  const [loading, setLoading] = useState(false);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const getLanches = async () => {
      setLaunches([]);
      setLoading(true);
      const response = await fetch("https://api.spacexdata.com/v4/launches", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setLaunches(data);
      setLoading(false);
    };
    getLanches();
  }, []);

  return (
    <div className="container-launches">
      <NavBar></NavBar>
      {loading ? (
        <h1 className="font-bold text-9xl text-green-400 text-center p-5 border-2">
          Loading
        </h1>
      ) : (
        <div className="launches_background">
          <div className="container mx-auto">
            <div className="grid grid-cols-5">
              <h1 className="font-bold text-9xl text-green-400 col-span-4">
                Launches
              </h1>
              <div className="flex items-center content-end mt-6 text-right">
                <label
                  className="border-4 border-slate-700 bg-slate-700 rounded-l p-2"
                  htmlFor="searchbar"
                >
                  <FaSearch class="text-green-400 text-2xl" />
                </label>
                <input
                  id="searchbar"
                  type="text"
                  className="searchbar border-4 border-slate-700 p-2 rounded-r text-white"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="container mx-auto">
              <div className="grid grid-cols-4 pt-5 pb-5">
                <div className="">
                  <Leftnav></Leftnav>
                </div>
                <div className="col-span-3">
                  <div className="flex-col gap-5">
                    {launches.map((launch, index) => (
                      <LaunchCard key={index} launch={launch}></LaunchCard>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
