import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import { FaLock, FaVideo } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const newCategory = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return newCategory === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex" id="projs">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("live");
          }}
          className={currentActive === "live" ? "active" : null}
        >
          Live Projects
        </button>

        <button
          onClick={() => {
            handleClick("development");
          }}
          className={currentActive === "development" ? "active" : null}
        >
          Under Development
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <div className={`status-badge ${item.status}`}>
                  {item.status === "live" ? (
                    "✓ Live"
                  ) : (
                    <>
                      <MdDeveloperMode /> In Development
                    </>
                  )}
                </div>

                <img width={300} src={item.imgPath} alt="" />

                <div style={{ width: "286px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.dateils}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a target="_blank" rel="noreferrer" href={item.link}>
                        <div className="icon-link"></div>
                      </a>
                      {item.video && (
                        <a target="_blank" rel="noreferrer" href={item.video}>
                          <div className="icon-video">
                            <FaVideo />
                          </div>
                        </a>
                      )}
                      {item.github === null ? (
                        <div
                          className="icon-lock-wrapper"
                          title="Private Repository"
                        >
                          <FaLock className="icon-lock" />
                        </div>
                      ) : (
                        <a target="_blank" rel="noreferrer" href={item.github}>
                          <div className="icon-github"></div>
                        </a>
                      )}
                    </div>

                    <a
                      className="link flex"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
