import React from "react";
// import { NavLink } from "react-router-dom";

import styles from "./NavigationItem.module.css";

const navigationItem = (props: any) => {
  // if (document.getElementById(props.link) !== null)
  // @ts-ignore: Object is possibly 'null'.
  // document.getElementById(props.link).focus();
  const delay = props.id * 100;
  return (
    <nav
      className={
        !props.active
          ? styles.NavigationItem
          : [styles.NavigationItem, styles.Active].join(" ")
      }
    >
      <a href={"#" + props.link} data-aos="slide-down" data-aos-delay={delay}>
        {props.children}
      </a>
    </nav>
  );
};

export default navigationItem;
