import React, { useState } from "react";

import styles from "./Work.module.css";

import Modal from "../../components/UI/Modal/Modal";
import Project from "./Project/Project";
import ProjectView from "./ProjectView/ProjectView";
import Slider from "./Slider/Slider";

import burgerOrder from "../../assets/img/projects-screenshot/burger-order.png";
import dnd from "../../assets/img/projects-screenshot/dnd.png";

import reactProfile from "../../assets/img/projects-screenshot/react_profile.png";
import netflixClone from "../../assets/img/projects-screenshot/netflix_clone.png";

// interface Project {
//   title: string;
//   desc: string;
//   pict: HTMLImageElement;
// }

const Passion = (props: any) => {
  const projects = [
    {
      title: "Burger Order",
      desc:
        "Create and order your own burger! A project I made to learn the basic and some of the advance part of React: redux, authentication, axios, and router",
      longerDesc:
        "This is a React app that lets you build and customize a burger. It has a Node.js backend with implementation of Firebase for the database and hosting. The project was built using the Redux library. The user can create their own account, login and check their orders.",
      pict: burgerOrder,
      tech: "React · CSS",
      id: 1,
    },
    {
      title: "React Profile",
      desc: "My website portfolio",
      longerDesc:
        "This is a React app that lets you build and customize a burger. It has a Node.js backend with implementation of Firebase for the database and hosting. The project was built using the Redux library. The user can create their own account, login and check their orders.",

      pict: reactProfile,
      tech: "React · CSS · Bootstrap",
      id: 2,
    },
    {
      title: "Drag and Drop",
      desc:
        "A project manager with drag-and-drop implementation that I made to learn typescript.",
      longerDesc:
        "This is a React app that lets you build and customize a burger. It has a Node.js backend with implementation of Firebase for the database and hosting. The project was built using the Redux library. The user can create their own account, login and check their orders.",

      pict: dnd,
      tech: "Typescript · CSS",
      id: 3,
    },
    {
      title: "Netflix Clone",
      desc: "A clone of Netflix",
      longerDesc:
        "This is a React app that lets you build and customize a burger. It has a Node.js backend with implementation of Firebase for the database and hosting. The project was built using the Redux library. The user can create their own account, login and check their orders.",
      pict: netflixClone,
      tech: "PHP · HTML · JS · CSS · MySQL",
      id: 4,
    },
  ];

  const [viewing, setViewing] = useState(false);
  const [viewedProject, setViewedProject] = useState(null);

  let projectView = null;
  console.log("masuk2");

  const clickHandler = (project: any) => {
    setViewing(true);
    setViewedProject(project);
  };

  const clickAwayHandler = () => {
    setViewing(false);
  };

  if (viewedProject !== null) {
    projectView = (
      <ProjectView
        // @ts-ignore: Object is possibly 'null'.
        title={viewedProject.title}
        // @ts-ignore: Object is possibly 'null'.
        desc={viewedProject.longerDesc}
        // @ts-ignore: Object is possibly 'null'.
        pict={viewedProject.pict}
      ></ProjectView>
    );
  }

  const projectsComponent = projects.map((project) => {
    return (
      <Project
        key={project.id}
        onClick={() => clickHandler(project)}
        title={project.title}
        desc={project.desc}
        pict={project.pict}
        tech={project.tech}
      ></Project>
    );
  });

  // const projectsView = projects.map((project) => {
  //   return (
  //     <ProjectView
  //       title={project.title}
  //       desc={project.desc}
  //       pict={project.pict}
  //     ></ProjectView>
  //   );
  // });

  return (
    <section className={styles.Content} id="projects">
      <Modal show={viewing} modalClosed={clickAwayHandler}>
        {projectView}
        {/* <Slider selected={viewedProject}>{projectsView}</Slider> unused until slickGoTo fixed*/}
      </Modal>
      <div className={styles.Passion}>
        <h2>My projects</h2>
        <div className={styles.Items}>{projectsComponent}</div>
      </div>
    </section>
  );
};

export default Passion;
