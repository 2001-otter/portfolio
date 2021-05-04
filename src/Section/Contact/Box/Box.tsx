import React from "react";

import styles from "./Box.module.css";

const Box = (props: any) => {
  const name = "fab fa-" + props.name + " fa-3x";
  return (
    <div className={styles.Box}>
      <a href={props.link}>
        {/* <img src={props.img} alt="logo" /> */}
        <i className={name}></i>
      </a>
    </div>
  );
};

export default Box;
