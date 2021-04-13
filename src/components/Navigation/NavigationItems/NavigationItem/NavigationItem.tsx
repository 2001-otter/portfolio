import React from "react";
// import { NavLink } from "react-router-dom";

import styles from "./NavigationItem.module.css";

const navigationItem = (props: any) => (
  <li className={styles.NavigationItem}>
    <a href={"#" + props.link}>{props.children}</a>
  </li>
);

export default navigationItem;
