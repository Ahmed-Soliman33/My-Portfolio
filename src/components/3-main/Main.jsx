import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { CATEGORIES } from "../../constants/categories";
import { AnimatePresence, motion } from "framer-motion";

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
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setcurrentActive(category.id);
              if (category.id === "all") {
                setArr(myProjects);
              } else {
                handleClick(category.id);
              }
            }}
            className={currentActive === category.id ? "active" : null}
          >
            {category.label}
          </button>
        ))}
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
                <img width={266} src={item.imgPath} alt={item.projectTitle} />

                <div style={{ width: "266px" }} className="box">
                  <h3 className="title">{item.projectTitle}</h3>
                  <p className="sub-title">{item.details}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a target="_blank" rel="noopener noreferrer" href={item.link} aria-label={`Visit ${item.projectTitle} live site`}>
                        <div className="icon-link"></div>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href={item.github} aria-label={`View ${item.projectTitle} on GitHub`}>
                        <div className="icon-github"></div>
                      </a>
                    </div>

                    <a className="link flex" href={item.link} target="_blank" rel="noopener noreferrer">
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
