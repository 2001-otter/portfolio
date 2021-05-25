import React from "react";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props: any) => {
  function jsUcfirst(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const navList = ["about", "work", "projects", "contact"];
  let counter = 0;
  const nav = navList.map((navItem) => {
    counter++;
    return (
      <NavigationItem
        link={navItem}
        active={navItem === props.currentSection}
        key={navItem}
        id={counter}
      >
        {jsUcfirst(navItem)}
      </NavigationItem>
    );
  });
  return <ul className={styles.NavigationItems}>{nav}</ul>;
};

export default navigationItems;
