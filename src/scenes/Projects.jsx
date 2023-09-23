import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, link }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div>
        <p className="text-2xl font-playfair">{title}</p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={`assets/${projectTitle}.png`} alt={projectTitle} />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Checkout my recent projects
          <br />
          Clicking on the image takes you to the GitHub repo
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="project-container"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'flex',
            overflowX: 'scroll',
            width: '100%', // Adjust this width as needed
            scrollSnapType: 'x mandatory', // Enable snapping to each project
          }}
        >
          <Project title="ArtiPic" link="https://github.com/shuxinweng/ArtiPic" />
          <Project title="Recipe App" link="https://github.com/shuxinweng/recipe-app" />
          <Project title="Employee Management App" link="https://github.com/shuxinweng/employee-management-app" />
          <Project title="Task Manager" link="https://github.com/shuxinweng/task-manager" />
          <Project title="Memory Game" link="https://github.com/shuxinweng/Memory_Game" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
