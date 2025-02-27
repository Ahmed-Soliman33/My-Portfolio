import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../../public/animation/laptop-animation.json";
import { useRef } from "react";
import { motion } from "framer-motion";

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
          Front-End Developer
        </motion.h1>

        <p className="sub-title">
          I’m Ahmed Soliman, a passionate web developer currently in my second
          year at the Faculty of Computers and Artificial Intelligence, Helwan
          University. My primary focus is on front-end development, where I
          specialize in creating intuitive and dynamic web interfaces. With a
          strong foundation in HTML, CSS, JavaScript, and modern frameworks like
          React, I aim to deliver seamless user experiences. Additionally, I
          possess a growing knowledge of back-end technologies, allowing me to
          contribute to full-stack projects and collaborate effectively across
          development teams.
        </p>

        <div className="container-download-icons">
          <div className="all-icons flex">
            <a target="_blank" href="https://www.facebook.com/570ahmedelfares/">
              <div className="icon icon-facebook2"></div>
            </a>
            <a target="_blank" href="https://x.com/ahmed_moham222">
              <div className="icon icon-twitter"></div>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ahmed-soliman-19901b325/"
            >
              <div className="icon icon-linkedin-square"></div>
            </a>
            <a target="_blank" href="https://github.com/Ahmed-Soliman33">
              <div className="icon icon-github"></div>
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
