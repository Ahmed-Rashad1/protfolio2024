import React, { useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

const Skills = () => {
  const [experience, setExperience] = useState(images.experiences);
  const [skills, setSkills] = useState(images.skills);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';
  //   client.fetch(query).then((data) => {
  //     setExperience(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []);

  return (
    <section
      className="xl:min-h-[100vh] border-t-[1px] border-[#ffffff2e] py-20"
      id="skills"
    >
      <div className="container mx-auto px-10 xl:px-32 h-full pt-[66px]">
        <h2 className="text_2xl font-semibold text-white/80 w-full text-center">
          SKILLS AND EXPERIENCES
        </h2>
        <div className="flex mt-20 flex-col xl:flex-row justify-center w-full gap-20">
          <motion.div className="flex-1 flex justify-center xl:justify-end items-start ">
            <div className="flex flex-wrap justify-center items-center w-2/3">
              {skills.map((skill) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center items-center flex-col text-center m-1 transition-all ease-in-out"
                  key={skill.name}
                >
                  <div className="flex justify-center items-center w-16 h-16 xl:w-28 xl:h-28 rounded-full bg-gray-700">
                    <img
                      className="w-1/2 h-1/2"
                      src={images[skill.imgurl]}
                      alt={skill.name}
                    />
                  </div>
                  <p className="text-sm xl:text-xl text-white/60 mt-2">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div className="flex-1 flex justify-center xl:justify-start items-start">
            <div className="flex flex-col justify-start items-start gap-20 mt-4">
              {experience.map((experience) => (
                <motion.div
                  className="w-full flex flex-row justify-start items-center"
                  key={experience.year}
                >
                  <div className="me-4 sm:me-12 ms-12 sm:ms-0">
                    <p className="font-bold text-white/60 text-nowrap text-sm sm:text-base">
                      {experience.year}
                    </p>
                  </div>
                  <motion.div className="me-12">
                    <motion.div 
                    className=" flex flex-col gap-2"
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className=" text-lg sm:text-2xl font-bold text-white/80 text-nowrap">
                        {experience.companyName}
                      </p>
                      <h4 className="text-white/70 text-sm sm:text-base text-nowrap">
                        {experience.jobTitle}
                      </h4>
                      <div className="text-white/40 text-sm max-w-72">{experience.desc}</div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
