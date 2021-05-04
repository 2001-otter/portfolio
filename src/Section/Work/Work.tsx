import React, { useEffect, useState } from "react";

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
// Create and order your own burger! A project I made to learn the basic and some of the advance part of React: redux, authentication, axios, and router"
const Passion = (props: any) => {
  const projects = [
    {
      title: "Burger Order",
      desc:
        "A web app for building and ordering your own burger." +
        " Add as many ingredients as you want. You can also see your order history",
      longerDesc:
        "Burger Order is a React web app that was build with implementation of Firebase for the database." +
        " Create your own account so you can see your order history." +
        " This project was made to sharpen my understanding of the basic and advance parts of React.",
      pict: [burgerOrder, reactProfile, dnd],
      tech: "React · CSS",
      fullTech: ["Axios", "CSS", "Firebase", "Jest", "React", "Redux"],
      source: "https://github.com/nicolas-ot/burger-order",
      site: "https://burger-builder-1efe7.firebaseapp.com/",
      id: 1,
    },
    {
      title: "React Profile",
      desc: "My website portfolio",
      longerDesc: "",

      pict: [reactProfile],
      tech: "React · CSS · Bootstrap",
      source: "https://github.com/nicolas-ot/portfolio",
      id: 2,
    },
    {
      title: "Project Manager",
      desc: "A project manager with drag-and-drop implementation.",
      longerDesc:
        "This is a small web app project that was built solely with typescript and css for managing projects." +
        " You can add new projects that will automatically assigned to active projects." +
        " The projects can then be moved freely with drag-and-drop between Active Projects and Finished Projects",

      pict: [dnd],
      tech: "Typescript · CSS",
      source: "https://github.com/nicolas-ot/task-manager",
      site: "https://nicolas-ot.github.io/task-manager/",
      id: 3,
    },
    {
      title: "Netflix Clone",
      desc: "A clone of Netflix",
      longerDesc: "This is a netflix clone built mostly using php",
      pict: [netflixClone],
      tech: "PHP · HTML · JS · CSS · MySQL",
      source: "https://github.com/nicolas-ot/netflix-clone",
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
        // @ts-ignore: Object is possibly 'null'.
        source={viewedProject.source}
        // @ts-ignore: Object is possibly 'null'.
        site={viewedProject.site}
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
        pict={project.pict[0]}
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
