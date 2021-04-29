import React from "react";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props: any) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="about" exact>
      About
    </NavigationItem>
    <NavigationItem link="passion">Passion</NavigationItem>
    {/* <NavigationItem link="experience">Experience</NavigationItem> */}
    <NavigationItem link="projects">Projects</NavigationItem>
    <NavigationItem link="contact">Contact</NavigationItem>
  </ul>
);

export default navigationItems;
