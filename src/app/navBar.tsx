import { IoRocketSharp } from "react-icons/io5";
export default function NavBar() {
  const navLinks = [
    {
      name: "Home",
      id: 0,
    },
    {
      name: "About",
      id: 1,
    },
    {
      name: "Contact",
      id: 2,
    },
  ];

  return (
    <div className="w-screen bg-nav h-20 text-gray-300 shadow-lg bg-black">
      <div className="p-7">
        <ul className="flex flex-row gap-8">
          <li className="h-5">
            <img
              className="-translate-y-7 scale-25 h-26 w-20 mb-5 align-middle"
              src="https://forumosauploads-12829.kxcdn.com/original/3X/0/0/00ba276b991787e9b25e5ff4a601b52d1e1eaebc.jpeg"
              alt=""
            />
          </li>
          {navLinks.map((link) => (
            <li key={link.id}>{link.name}</li>
          ))}
        </ul>
      </div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
}
