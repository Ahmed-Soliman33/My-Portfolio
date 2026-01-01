import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../../public/animation/laptop-animation.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const lottieRef = useRef();

  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = "./Ahmed_Soliman_Frontend.pdf";
    link.download = "Ahmed_Soliman_Frontend.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero flex" id="up">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            draggable="false"
            src="../../me.png"
            className="avatar"
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Front-End Engineer
        </motion.h1>

        <p className="sub-title">
          Front-End Developer with nearly 2 years of experience building
          responsive, high-performance web applications for Saudi market and
          international clients. Delivered 10+ production projects with modern
          UI/UX design, seamless animations, and exceptional user experiences.
          <br />
          Specializing in React.js ecosystem with TypeScript, I create
          pixel-perfect implementations from Figma designs and collaborate
          effectively with backend teams for full-stack integration. Currently
          pursuing Computer Science at Helwan University while working with
          clients across e-commerce, fintech, and marketing sectors.
        </p>

        <div className="container-download-icons">
          <div className="all-icons flex">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/570ahmedelfares/"
            >
              <FaFacebook size={24} className="icon" />
            </a>
            <a href="mailto:ahmed.soliman202005@gmail.com">
              <MdEmail size={26} className="icon" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ahmed-soliman-19901b325/"
            >
              <FaLinkedin size={24} className="icon" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Ahmed-Soliman33"
            >
              <FaGithub size={24} className="icon" />
            </a>
          </div>
          <button className="download-btn" onClick={handleCVDownload}>
            Download CV
          </button>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
