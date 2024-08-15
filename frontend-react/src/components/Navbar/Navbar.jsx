import React, { useCallback, useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setactive] = useState("home")
  const [toggle, setToggle] = useState(false);
  const navName = ["home", "projects", "skills", "contact"];


  const colorChange = useCallback(() => {
    if (window.scrollY === 0) {
      setactive("home")
    } 
}, [])

   useEffect(() => {
    window.addEventListener('scroll', colorChange)

    return () => window.removeEventListener('scroll', colorChange)
}, [colorChange])
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-[rgba(255, 255, 255, 0.25)] backdrop-blur-3xl border border-[#ffffff2e] fixed z-[2]"
    >
      <ul className="flex-1 hidden justify-center items-center list-none lg:flex">
        {navName.map((item) => (
          <li
            className="flex justify-center items-center text-base my-0 mx-4 cursor-pointer flex-col group"
            key={`link-${item}`}
          >
            
            <div className={`w-[5px] h-[5px] rounded-full mb-[5px] group-hover:bg-blue-600 ${active === item ? "bg-blue-600" : "bg-transparent"}`} />
            <Link
              className={` no-underline flex-col uppercase font-medium transition duration-150 ease-out group-hover:text-blue-600  
                
                ${
                  active === item
                    ? "text-blue-600"
                    : "text-white/50"
                }
                `}
              to={item}
              spy={true}
              smooth={true}
              duration={750}
              onClick={()=> setactive(item)}
              
              // onScroll={() => scrllhandle()}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={`w-8 h-8 relative flex lg:hidden justify-center items-center rounded-full bg-slate-600 hover:bg-gradient-to-r from-[#0814a1] via-[#0a3e6c] to-[#430767] active:scale-[90%] duration-75 ${
          toggle ? "hidden" : "flex"
        }`}
        onClick={() => setToggle(true)}
      >
        <HiMenuAlt4 className="w-[70%] h-[70%] text-white/60 hover:text-white  hover:rotate-180 duration-200" />
      </div>
      {toggle && (
        <div className="fixed top-0 bottom-0 right-0 left-0 z-[5] p-4 h-screen flex justify-start items-start flex-col bg-opacity-80 bg-slate-900 lg:hidden">
          <div
            className="w-8 h-8 ms-4 relative flex justify-center items-center rounded-full bg-slate-600 hover:bg-gradient-to-r from-[#0814a1] via-[#0a3e6c] to-[#430767] active:scale-[90%] group duration-75"
            onClick={() => setToggle(false)}
          >
            <HiX className="w-[70%] h-[70%] text-white/60 group-hover:text-white  group-hover:rotate-90 duration-200 " />
          </div>
          <ul className="w-full">
            <motion.div
              className="w-[70%] mx-auto mt-8 rounded-xl py-4 px-8 bg-slate-800"
              whileInView={{ scale: [2, 1] }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.4, ease: "easeOut" },
              }}
            >
              {["home", "projects", "skills", "contact"].map((item) => (
                <li
                  className="border-b-[1px] border-[#ffffff2e] last:border-none pb-3 pt-2 group hover:cursor-pointer"
                  key={item}
                >
                  <Link
                    className="block text-white/70 group-hover:text-blue-600"
                    to={item}
                    spy={true}
                    smooth={true}
                    duration={750}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </motion.div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
