import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { images } from "../../constants";
import ReactTooltip from "react-tooltip";

const Projects = () => {
  const [works, setWorks] = useState(images.myworks);
  const [filterWork, setFilterWork] = useState(images.myworks);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const worksCategory = ["All", "React JS", "Next JS", "UI/UX", "Simple App"];

  //   const myworks = [
  //     {
  //       name:"Digital Shop",
  //       imgUrl: "digital_shop",
  //       description: "elctronics online shopping with filtering by category, company name and others, it made by nextJS, tailwindCSS and javaScript",
  //       codeLink: "https://github.com/a7med-rashad/Digital_Shop",
  //       projectLink:"https://digital-shop-mu.vercel.app/",
  //       tags: "Next JS"
  //     },
  //     {
  //       name:"City Restaurant",
  //       imgUrl: "city_restaurant",
  //       description: "online restaurant to order the fast food and dessert it made by reactJS, tailwindCSS and javaScript",
  //       codeLink: "https://github.com/a7med-rashad/restaurant-app",
  //       projectLink:"https://restaurant-app-123.netlify.app/",
  //       tags: "React JS"
  //     },
  //     {
  //       name:"Go Shopping",
  //       imgUrl: "go_shopping",
  //       description: "store your products online with this E-commerce website, it made by reactJs, redux, css, javaScript",
  //       codeLink: "https://github.com/a7med-rashad/shopping-website",
  //       projectLink:"https://chic-syrniki-2ae39a.netlify.app/",
  //       tags: "React JS"
  //     },
  //     {
  //     name:"koldair project",
  //     imgUrl: "koldair",
  //     description: "its a simple website to appear the company products and features, it made by html, css, javaScript",
  //     codeLink: "https://github.com/a7med-rashad/koldair",
  //     projectLink:"https://a7med-rashad.github.io/koldair/",
  //     tags: "Simple App"
  //   },
  //     {
  //     name:"Adventure Awaits",
  //     imgUrl: "adventure",
  //     description: "simple website to training on reactJs library and make single page application, it made by reactJS, css, javaScript",
  //     codeLink: "https://github.com/a7med-rashad/react-website",
  //     projectLink:"https://wonderful-centaur-b04088.netlify.app/",
  //     tags: "React JS"
  //   },
  //   {
  //     name:"Todo App",
  //     imgUrl: "todo",
  //     description: "todo application to save tasks and check it, it made by html, css, javaScript",
  //     codeLink: "https://github.com/a7med-rashad/App_Product",
  //     projectLink:"https://a7med-rashad.github.io/App_Product/",
  //     tags: "Simple App"
  //   },
  //     {
  //     name:"Special Design",
  //     imgUrl: "special_design",
  //     description: "simple template website to appear the company products and features, it made by html, css, javaScript",
  //     codeLink: "https://github.com/a7med-rashad/special-design",
  //     projectLink:"https://a7med-rashad.github.io/special-design/",
  //     tags: "UI/UX"
  //   },

  //     {
  //       name:"kasper design",
  //       imgUrl: "kasper",
  //       description: "simple template landing page to appear your works, it made by html, css",
  //       codeLink: "https://github.com/a7med-rashad/Kasper-design-",
  //       projectLink:"https://a7med-rashad.github.io/Kasper-design-/",
  //       tags: "UI/UX"
  //     },
  //     {
  //     name:"leon design",
  //     imgUrl: "leon",
  //     description: "simple template landing page to appear your works, it made by html, css",
  //     codeLink: "https://github.com/a7med-rashad/new_branch2",
  //     projectLink:"https://a7med-rashad.github.io/new_branch2/",
  //     tags: "UI/UX"
  //   },

  // ]
  // useEffect(() => {
  //   // fetch("https://products-api-flame.vercel.app/links/")
  //   fetch("myworks.json")
  //     .then((response) => response.json())
  //     .then((myworks) => {
  //     setWorks(myworks);
  //     setFilterWork(myworks);
  //     console.log(myworks)
  //   })
  // }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ opacity: 0, y: 100 }]);
    setTimeout(() => {
      setAnimateCard([{ opacity: 1, y: 0 }]);
      if (item === "All") {
        setFilterWork(works);
        console.log(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <section
      className="xl:min-h-[150vh] border-t-[1px] border-[#ffffff2e] py-20"
      id="projects"
    >
      <div className="container mx-auto px-10 xl:px-32 h-full pt-8 xl:pt-[66px]">
        <h2 className="text_2xl font-semibold text-white/80 w-full text-center">
          PROJECTS
        </h2>
        <div className="flex flex-row justify-center items-center mt-12 mb-8 xl:mb-12 gap-0 xl:gap-3 flex-wrap">
          {worksCategory.map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`py-2 px-3 xl:py-3 xl:px-6 rounded-xl bg-gray-800 font-semibold xl:font-[800] cursor-pointer transition-all ease-in-out m-2 flex justify-center items-center hover:bg-gray-700
              text-sm xl:text-xl active:scale-95 duration-100 ${
                activeFilter === item
                  ? "border-[1px] border-[#1d2cff] text-white"
                  : "text-white/70"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="flex flex-wrap justify-center items-center"
        >
          {filterWork.map((work, index) => (
            <div className="w-full sm:w-72 m-3 pb-3 2xl:pb-3  flex-col rounded-2xl 2xl:rounded-2xl bg-inherit border border-gray-700 cursor-pointer text-white/80 transition-all ease-in-out hover:drop-shadow-lg">
              <div className="w-full h-56 relative flex justify-center items-center">
                <img
                  className="w-full h-full rounded-xl object-cover"
                  src={images[work.imgUrl]}
                  alt={work.name}
                />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-black/50 rounded-xl opacity-0 transition-all ease-in-out flex justify-center items-center"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="w-1/2 h-1/2 rounded-full bg-black/50 text-white m-4 font-[800] cursor-pointer transition-all ease-in-out flex justify-center items-center"
                    >
                      <AiFillEye className="w-full h-full text-white" />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className=" min-h-32 pt-7 w-full relative flex flex-col justify-center gap-4 items-center ">

                <p
                  className="text-sm text-white/80 group"
                  data-tip
                  data-for={work.title}
                  key={work.title}
                >
                  <div className=" justify-center items-start text-center absolute h-[90%] w-full top-2 left-0 bg-[#0a0e17] text-sm text-white/80 hidden group-hover:flex z-30 ">
                    <motion.div
                    className="bg-transparent pt-8 p-4 w-full  h-full transition-all ease-in-out"
                    initial={{  opacity: 0 }}
                      whileHover={{ opacity: [0, 1] }}
                      transition={{ duration: 0.2 }}
                    >
                      {work.description}
                    </motion.div>
                  </div>
                  <div className="block group-hover:hidden">
                    {work.description.substring(0, 30) + "  . . ."}
                  </div>
                </p>
                <div className="flex justify-center items-center gap-16">
                  <a
                    href={work.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-inherit text-white/70 text-xl flex justify-center items-center  border border-gray-500 hover:bg-gray-800 active:scale-95 hover:text-white"
                  >
                    <motion.div
                      whileInView={{ scale: [1.3, 0.8, 1] }}
                      whileHover={{ scale: [1, 1.3] }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full flex justify-center items-center"
                    >
                      <FaExternalLinkAlt />
                    </motion.div>
                  </a>
                  <a
                    href={work.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-inherit text-white/70 text-xl flex justify-center items-center  border border-gray-500 hover:bg-gray-800 active:scale-95 hover:text-white"
                  >
                    <motion.div
                      whileInView={{ scale: [1.3, 0.8, 1] }}
                      whileHover={{ scale: [1, 1.3] }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full flex justify-center items-center"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </div>

                <a
                  href={work.projectLink}
                  target="_blank"
                  className="absolute py-2 px-4 rounded-xl bg-[#0a0e17] top-[-25px] flex justify-center items-center z-20"
                  rel="noreferrer"
                >
                  <p className="text-xl">{work.title}</p>
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
