import { motion } from "framer-motion";
import "./skills.css";
import { skillsData } from "./skillsData";

const categoryVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const Skills = () => {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id="skills-heading" className="title">
          Technical Skills
        </h2>
        <p className="sub-title">
          Technologies and tools I work with to build exceptional web experiences
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={categoryVariants}
            className={`skill-category ${category.className}`}
          >
            <h3 className="category-title">{category.title}</h3>
            <div className={category.showIcons ? "skill-icons" : "skill-pills"}>
              {category.skills.map((skill, skillIndex) => {
                const SkillIcon = skill.icon;

                return category.showIcons ? (
                  <div
                    key={skillIndex}
                    className="skill-icon-item"
                    tabIndex="0"
                    aria-label={skill.name}
                  >
                    <SkillIcon aria-hidden="true" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ) : (
                  <div
                    key={skillIndex}
                    className="skill-pill"
                    tabIndex="0"
                    aria-label={skill.name}
                  >
                    {skill.name}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
