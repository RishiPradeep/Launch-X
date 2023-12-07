import { IoRocketSharp } from "react-icons/io5";
import dragon from "../assets/images/dragon.jpg";
import Image from "next/image";

export default function goButton() {
  return (
    <>
      <button>
        <div className="max-w-fit px-10 py-5 bg-green-400  shadow-md text-black font-bold">
          Get Started{" "}
          <IoRocketSharp className="inline-block align-middle ml-3 mb-1" />
        </div>
      </button>
    </>
  );
}
