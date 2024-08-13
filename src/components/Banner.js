import React from "react";
import Image from "../assets/sakshi3.png";
import { FaGithub, FaInstagram, FaLinkedin,FaMailBulk } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
const Banner = () => {
  return (
    <section
      className=" section min-h-[85vh lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] font-bold leading-[0.8] lg:text-[80px] mb-2 lg:mt-4"
            >
              Sakshi <span>Donadkar</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-2 text-[30px] lg:text-[30px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className=" text-white mr-2">I am a</span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Full Stack Developer",
                  2000,
                ]}
                speed={50}
                className="text-amber-600"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-[18px]"
            >
              Hi, I'm a passionate developer and a curious learner. I thrive on
              tackling challenging projects that drive me to broaden my
              expertise and abilities.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact">
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a
                href="Resumeee.pdf"
                className="btn btn-lg flex items-center justify-center"
                download
              >
               My Resume
              </a>
            </motion.div>

            {/* Socials */}
        
            <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex text-[25px] gap-x-6 max-w-max mt-8 mx-auto lg:mx-0 items-center justify-center"
              >
                <a href="https://www.instagram.com/_sakshi.donadkar_">
                  <FaInstagram />
                </a>
                <a href="https://github.com/sakshidonadkar">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/sakshi-donadkar/">
                  <FaLinkedin />
                </a>
                <a href="mailto:sakshidonadkar13@gmail.com">
                  <FaMailBulk />
                </a>
              </motion.div>
            </div>
          
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w[320px] lg:max-w-[482px] "
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
