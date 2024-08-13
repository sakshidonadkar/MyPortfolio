import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// Correctly import images as default exports
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import bootstrapLogo from "../assets/bootstrap.png";
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import mongodbLogo from "../assets/mongodb.png";
import gitLogo from "../assets/git.png";

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto px-4 py-12">
        <div className="flex-col">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 text-accent mb-6 lg:mt-0">What I know</h2>
            <h3 className="h3 max-w-[455px] mb-14 text-[35px]">
              Technical Skills
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 ml-4 mr-4 md:ml-20 md:mr-20 lg:ml-40 lg:mr-40"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className="group w-36 h-36 bg-blue border-2 border-white flex flex-col items-center justify-center rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-transparent">
                <img src={htmlLogo} alt="HTML Logo" className="w-24 h-24" />
                <h1 className="mt-1 text-center text-sm">HTML</h1>
              </div>
              <div className="group w-36 h-36 bg-blue border-2 border-white flex flex-col items-center justify-center rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-transparent">
                <img src={cssLogo} alt="CSS Logo" className="w-24 h-24" />
                <h1 className="mt-1 text-center text-sm">CSS</h1>
              </div>
              <div className="group w-36 h-36 bg-blue border-2 border-white flex flex-col items-center justify-center rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-transparent">
                <img src={jsLogo} alt="JavaScript Logo" className="w-24 h-24" />
                <h1 className="mt-1 text-center text-sm">JavaScript</h1>
              </div>
              <div className="group w-36 h-36 bg-blue border-2 border-white flex flex-col items-center justify-center rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-transparent">
                <img
                  src={bootstrapLogo}
                  alt="Bootstrap Logo"
                  className="w-24 h-24"
                />
                <h1 className="mt-1 text-center text-sm">Bootstrap</h1>
              </div>
              <div className="group w-36 h-36 bg-blue border-2 border-white flex flex-col items-center justify-center rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-transparent">
                <img src={reactLogo} alt="React Logo" className="w-24 h-24" />
                <h1 className="mt-1 text-center text-sm">React</h1>
              </div>
              <div className="group w-36 h-36 bg-blue border-2 border-white flex flex-col items-center justify-center rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-transparent">
                <img src={nodeLogo} alt="Node.js Logo" className="w-24 h-24" />
                <h1 className="mt-1 text-center text-sm">Node.js</h1>
              </div>
              <div className="group w-36 h-36 bg-blue border-2 border-white flex flex-col items-center justify-center rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-transparent">
                <img src={gitLogo} alt="Git Logo" className="w-24 h-24" />
                <h1 className="mt-1 text-center text-sm">Git</h1>
              </div>
              <div className="group w-36 h-36 bg-blue border-2 border-white flex flex-col items-center justify-center rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-transparent">
                <img
                  src={mongodbLogo}
                  alt="MongoDB Logo"
                  className="w-24 h-24"
                />
                <h1 className="mt-1 text-center text-sm">MongoDB</h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
