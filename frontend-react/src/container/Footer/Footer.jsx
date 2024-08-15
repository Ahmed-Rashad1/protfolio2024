import React from "react";
import { Link } from "react-scroll";

const Footer = () => {

  const navName = ["home", "projects", "skills", "contact"]
  return (
    <section className="h-32 lg:h-28 border-t-[1px] border-[#ffffff2e]"  id="home">
      <div className="container mx-auto px-10 xl:px-32 h-full flex flex-col lg:flex-row justify-around lg:justify-between items-center">
      <ul className="justify-start gap-4 lg:gap-8 items-center list-none flex">
        {navName.map((item) => (
          <li
            className="flex justify-center items-center text-sm lg:text-lg cursor-pointer flex-col group"
            key={`link-${item}`}
          >
            <Link
              className="text-white/50 no-underline flex-col font-medium transition duration-150 ease-out group-hover:text-blue-600 "
              to={item}
              spy={true}
              smooth={true}
              duration={750}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-white/50 text-sm lg:text-lg">
      ©2024 Ahmed Rashad. All rights reserved.
      </div>
        </div>
        </section>
  );
};

export default Footer
