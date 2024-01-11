import { IoRocketSharp } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

interface Link {
  name: string;
  id: number;
  href: string;
}

export default function NavBar() {
  const [active, setActive] = useState(0);

  const handleClick = (link: Link) => {
    setActive(link.id);
  };

  const navLinks = [
    {
      name: "Home",
      id: 0,
      href: "/",
    },
    {
      name: "About",
      id: 1,
      href: "/about",
    },
    {
      name: "Launches",
      id: 2,
      href: "/launches",
    },
  ];

  return (
    <div className="text-gray-500 bg-black">
      <div className="p-7">
        <ul className="flex flex-row gap-8">
          <li className="h-5">
            <img
              className="-translate-y-7 scale-25 h-26 w-20 mb-5 align-middle"
              src="https://forumosauploads-12829.kxcdn.com/original/3X/0/0/00ba276b991787e9b25e5ff4a601b52d1e1eaebc.jpeg"
              alt=""
            />
          </li>
          <li>|</li>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                onClick={() => handleClick(link)}
                href={link.href}
                className="hover:text-white"
              >
                {link.name}
              </Link>
              <span className="pl-5">|</span>
            </li>
          ))}
        </ul>
      </div>
      <hr className="h-px bg-gray-600 border-0 dark:bg-gray-700"></hr>
    </div>
  );
}
