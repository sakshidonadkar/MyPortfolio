import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vq80lqr", // Replace with your EmailJS service ID
        "template_rwo24lm", // Replace with your EmailJS template ID
        form.current,
        "ngZOXI_e3-XVWhTZ4" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );

    e.target.reset(); // Reset form fields
  };

  return (
    <section id="contact" className="lg:section py-16 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center "
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in Touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Lets Work <br /> together!
              </h2>
              <h3>© Copyright 2024. All Rights Reserved by Sakshi Donadkar</h3>
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex text-[25px] gap-x-6 max-w-max mt-8 mb-4 mx-auto lg:mx-0 items-center justify-center"
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
          </motion.div>

          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              name="user_email"
              placeholder="your email"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="user_name"
              placeholder="your name"
              required
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12 "
              name="message"
              placeholder="your message"
              required
            ></textarea>
            <button className="btn btn-lg" type="submit">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
