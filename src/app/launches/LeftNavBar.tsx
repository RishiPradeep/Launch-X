import "../globals.css";
import { useState } from "react";
export default function Leftnav() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex-col divide-y-2 divide-slate-700 gap-10 text-white w-72 text-xl border-2 border-slate-700 p-3 rounded">
      <button
        onClick={() => {
          setActive(0);
        }}
      >
        <div className={`p-5 w-64 ${active == 0 ? "text-green-400" : ""}`}>
          All Launches
        </div>
      </button>
      <button
        onClick={() => {
          setActive(1);
        }}
      >
        <div className={`p-5 w-64 ${active == 1 ? "text-green-400" : ""}`}>
          Upcoming Launches
        </div>
      </button>
      <button
        onClick={() => {
          setActive(2);
        }}
      >
        <div className={`p-5 w-64 ${active == 2 ? "text-green-400" : ""}`}>
          Previous Launches
        </div>
      </button>
      <button
        onClick={() => {
          setActive(3);
        }}
      >
        <div className={`p-5 w-64 ${active == 3 ? "text-green-400" : ""}`}>
          Failed Launches
        </div>
      </button>
    </div>
  );
}
