import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/sakshi4.png";
import { Link } from "react-scroll";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section mb-80 lg:mb-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          >
            <img src={Image} alt="" />
          </motion.div>
          {/*text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-6"
          >
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4 uppercase">i am full stack deveolper.</h3>
            <p className="mb-6">
              I am Sakshi Donadkar, a B.Tech Computer Science student at GH
              Raisoni Institute Of Engineering And Technology, Nagpur. I
              specialize in web development and software projects, with skills
              in Python, Java, HTML, CSS, JavaScript, Bootstrap, and React.
              Proficient in tools like VS Code, PostMan and GitHub, I also have
              experience with MySQL databases. I am a dedicated learner with
              strong communication and time management skills, always eager to
              take on new challenges to expand my expertise.
            </p>
            <div className="flex gap-x-8 items center">
              <Link to="contact">
                <button className="btn btn-lg">Contact me</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
