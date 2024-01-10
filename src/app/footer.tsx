import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="w-screen bg-nav h-36 text-gray-300 shadow-lg bg-black mr-10">
      <div className="p-1 pl-5 pt-5">
        <span className="inline-block text-green-400 align-middle pr-3">
          <MdOutlineMailOutline></MdOutlineMailOutline>
        </span>{" "}
        rishipradeep@gmail.com
      </div>
      <div className="p-1 pl-5">
        <span className="inline-block text-green-400 align-middle pr-3">
          <FaGithub></FaGithub>
        </span>{" "}
        RishiPradeep
      </div>
      <div className="p-1 pl-5">
        <span className="inline-block text-green-400 align-middle pr-3">
          <FaLinkedin></FaLinkedin>
        </span>{" "}
        Rishi Pradeep
      </div>
    </div>
  );
}
