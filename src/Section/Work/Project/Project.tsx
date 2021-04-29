import React from "react";

import styles from "./Project.module.css";

const Project = (props: any) => {
  return (
    <div className={styles.Item} onClick={props.onClick}>
      <h3>{props.title}</h3>
      <img src={props.pict} alt="screenshot"></img>
      <p>{props.desc}</p>
      <p className={styles.Tech}>{props.tech}</p>
    </div>
  );
};

export default Project;
