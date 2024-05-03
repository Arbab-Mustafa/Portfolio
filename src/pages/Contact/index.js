import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaLocationArrow,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { headingAnimation, contactAnimation } from "../../hooks/useAnimation";
import { BottomLine } from "../../components";
import { Helmet } from "react-helmet";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jyrfytg",
        "template_h2lbf13",
        form.current,
        "kb3lrre07kwSjwm3o"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Message has been sent  to Arbab Mustafa.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="parent py-24 mt-4">
      <Helmet>
        <title> Arbab Mustafa </title>
        <meta
          name="description"
          content="Contact Arbab Mustafa, a Software Engineering Student at UET Taxila from Pakistan, specializing in Web Development, Front End Development, React JS, Next.js, and Node.js. Get in touch with Arbab for inquiries, collaborations, or project opportunities."
        />
        <meta
          name="keywords"
          content="arbab mustafa, software engineering student, UET Taxila, pakistan, contact, web developer, front end developer, react js developer, next.js developer, node.js developer, inquiries, collaborations, project opportunities, arbab, mustafa arbab"
        />

        <meta name="author" content="Arbab Mustafa" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Arbab Mustafa - Home" />
        <meta
          property="og:description"
          content="Welcome to Arbab Mustafa's portfolio website."
        />
        <meta
          property="og:image"
          content="https://www.arbabmustafa.com/images/og-image.jpg"
        />
        <meta property="og:url" content="https://www.arbabmustafa.com/" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.arbabmustafa.com/contact" />
      </Helmet>
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-neutral text-center">Feel Free To Contact Me</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <BottomLine />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          className=""
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl font-medium">Contact Me</h2>
          {/*  */}
          <form ref={form} onSubmit={handleSend}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <input
                className="input-field"
                type="text"
                name="from_name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                className="input-field"
                type="email"
                name="from_email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="input-field"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="input-field"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" value="Send " className="primary-button">
              <span>Send</span>
              <span>
                <MdSend />
              </span>
            </button>
          </form>
          {/*  */}
        </motion.div>
        <motion.div
          className=""
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl font-medium">Contact Info</h2>
          <div className="flex items-center my-6">
            <FaUserAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaUserAlt>
            <h3 className="font-medium text-primary">Arbab Mustafa</h3>
          </div>
          <div className="flex items-center my-6">
            <FaPhoneAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaPhoneAlt>
            <h3 className="font-medium text-primary">+923225305671</h3>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="text-3xl mr-8 hover:text-primary cursor-pointer duration-300"></MdEmail>
            <h3 className="font-medium text-primary">
              arbabmachi132@gmail.com
            </h3>
          </div>
          <div className="flex items-center my-6">
            <FaLocationArrow className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaLocationArrow>

            <h3 className="font-medium text-primary">Islamabad, Pakistan</h3>
          </div>
          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-neutral">Social</h3>
            <div className="bg-gray-400 w-10 h-[2px] mx-4"></div>
            <a
              href="https://www.linkedin.com/in/arbabmustafa132/"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              href="https://github.com/Arbab-Mustafa"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaGithubSquare></FaGithubSquare>
            </a>
            <a
              href="https://twitter.com/KMarkhoor"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaTwitterSquare></FaTwitterSquare>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61553906184469&mibextid=ZbWKwL"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaFacebookSquare></FaFacebookSquare>
            </a>
            <a
              href="https://wa.me/message/6A7QQJGCOCIBI1"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaWhatsapp></FaWhatsapp>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
