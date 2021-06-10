import React from "react";

import styles from "./Project.module.css";

const Project = (props: any) => {
  const delay = 200 * props.id;
  // console.log(props.key);

  return (
    <div
      className={styles.Item}
      onClick={props.onClick}
      data-aos="slide-up"
      data-aos-duration={700}
      data-aos-delay={delay}
    >
      <div className={styles.Overlay}>
        <div className={styles.Search}>
          <i className="fas fa-search-plus fa-2x"></i>
        </div>
      </div>
      <h3>{props.title}</h3>
      <img src={props.pict} alt="screenshot"></img>
      <p>{props.desc}</p>
      <p className={styles.Tech}>{props.tech}</p>
    </div>
  );
};

export default Project;
