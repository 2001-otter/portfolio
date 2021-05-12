import React from "react";
// import { NavLink } from "react-router-dom";

import styles from "./NavigationItem.module.css";

const navigationItem = (props: any) => {
  // if (document.getElementById(props.link) !== null)
  // @ts-ignore: Object is possibly 'null'.
  // document.getElementById(props.link).focus();
  return (
    <li
      className={
        !props.active
          ? styles.NavigationItem
          : [styles.NavigationItem, styles.Active].join(" ")
      }
    >
      <a href={"#" + props.link}>{props.children}</a>
    </li>
  );
};

export default navigationItem;
