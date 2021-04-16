import React from "react";

import styles from "./Work.module.css";

import Project from "./Project/Project";

import burgerOrder from "../../assets/img/projects-screenshot/burger-order.png";

const Passion = (props: any) => {
  const projects = [
    {
      title: "Burger Order",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur autem placeat eum quia, soluta rerum tempore animi, minima facilis laborum tempora laboriosam doloremque rem. Cupiditate odio natus voluptates dolore!",
      pict: burgerOrder,
    },
    {
      title: "Burger Order",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint sunt animi aliquam cumque dolore magnam quo inventore nostrum id quasi?",
      pict: burgerOrder,
    },
    {
      title: "Burger Order",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eligendi.",
      pict: burgerOrder,
    },
    {
      title: "Burger Order",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eligendi.",
      pict: burgerOrder,
    },
  ];

  const projectsComponent = projects.map((project) => {
    return (
      <Project
        title={project.title}
        desc={project.desc}
        pict={project.pict}
      ></Project>
    );
  });

  return (
    <section className={styles.Content} id="projects">
      {/* <Backdrop show></Backdrop> */}
      <div className={styles.Passion}>
        <h2>My projects</h2>
        <div className={styles.Items}>{projectsComponent}</div>
      </div>
    </section>
  );
};

export default Passion;
