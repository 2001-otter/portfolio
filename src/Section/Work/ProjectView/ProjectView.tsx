import React from "react";

import styles from "./ProjectView.module.css";

const ProjectView = (props: any) => {
  return (
    <div className={styles.Main}>
      <h3>{props.title}</h3>
      <div className={styles.ImgContainer}>
        <img className={styles.Img} src={props.pict} alt="screenshot"></img>
      </div>
      <p>{props.desc}</p>
    </div>
  );
};

export default ProjectView;
