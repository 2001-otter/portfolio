import React, { useState } from "react";

import styles from "./Work.module.css";

import Modal from "../../components/UI/Modal/Modal";
import Project from "./Project/Project";
import ProjectView from "./ProjectView/ProjectView";
import Slider from "./Slider/Slider";

import burgerOrder from "../../assets/img/projects-screenshot/burger-order.png";

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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur autem placeat eum quia, soluta rerum tempore animi, minima facilis laborum tempora laboriosam doloremque rem. Cupiditate odio natus voluptates dolore!",
      pict: burgerOrder,
      id: 1,
    },
    {
      title: "Burger Order",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint sunt animi aliquam cumque dolore magnam quo inventore nostrum id quasi?",
      pict: burgerOrder,
      id: 2,
    },
    {
      title: "Burger Order",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus vitae rem eius eos accusamus, in recusandae magnam ex soluta earum ratione nihil cumque ipsa distinctio quis asperiores quo? Sed quas suscipit facere commodi, reprehenderit saepe, eligendi praesentium maxime rem vitae molestiae aspernatur aut esse pariatur earum, consequuntur in vero autem similique qui fugit? Neque maiores nostrum non optio natus cupiditate?",
      pict: burgerOrder,
      id: 3,
    },
    {
      title: "Burger Order",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eligendi.",
      pict: burgerOrder,
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
        desc={viewedProject.desc}
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
      ></Project>
    );
  });

  const projectsView = projects.map((project) => {
    return (
      <ProjectView
        title={project.title}
        desc={project.desc}
        pict={project.pict}
      ></ProjectView>
    );
  });

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
