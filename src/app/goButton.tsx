import { IoRocketSharp } from "react-icons/io5";

export default function goButton() {
  return (
    <>
      <button>
        <div className="bg-black max-w-fit px-10 py-5 shadow-md text-green-400 font-bold">
          Get Started{" "}
          <IoRocketSharp className="inline-block align-middle ml-3 mb-1" />
        </div>
      </button>
    </>
  );
}
