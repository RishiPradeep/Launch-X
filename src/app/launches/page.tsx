"use client";
import { useEffect, useState } from "react";
import NavBar from "../navBar";
import LaunchCard from "./launchCard";
import "../globals.css";
import Leftnav from "./LeftNavBar";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectMenuOption } from "../../store/menuSlice";
import LoadingIcon from "./LoadingIcon";
export default function Launches() {
  const option = useSelector(selectMenuOption);
  const [loading, setLoading] = useState(false);
  const [launches, setLaunches] = useState([]);
  const [searchInput, SetsearchInput] = useState("");
  const [tempLaunches, setTempLaunches] = useState([]);

  useEffect(() => {
    const getLaunches = async () => {
      setLaunches([]);
      setLoading(true);
      const response = await fetch(
        "https://lldev.thespacedevs.com/2.2.0/launch/?limit=10",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setLaunches(data.results);
      setTempLaunches(data.results);
      setLoading(false);
    };
    getLaunches();
  }, []);

  useEffect(() => {
    if (option === 0) {
      console.log("option 0");
    }

    if (option === 1) {
      console.log("option 1");
    }

    if (option === 2) {
      console.log("option 2");
    }

    if (option === 3) {
      console.log("option 3");
    }
  }, [option]);

  useEffect(() => {
    if (loading) {
      return;
    } else {
      if (searchInput === "ab") {
        setLaunches([...tempLaunches]);
        return;
      } else {
        const filteredLaunches = tempLaunches.filter((launch: any) => {
          return launch.name.toLowerCase().includes(searchInput.toLowerCase());
        });
        setLaunches(filteredLaunches);
      }
    }
  }, [searchInput]);

  return (
    <>
      <NavBar></NavBar>
      {loading ? (
        <LoadingIcon></LoadingIcon>
      ) : (
        <div className="launches_background" style={{ height: "100%" }}>
          <div className="container mx-auto">
            <div className="grid grid-cols-5 mb-3">
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
                  onChange={(e) => {
                    SetsearchInput(e.target.value);
                  }}
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
    </>
  );
}
