import React from "react";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props: any) => {
  function jsUcfirst(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const navList = ["about", "work", "projects", "contact"];
  const nav = navList.map((navItem) => {
    if (navItem === props.currentSection)
      return (
        <NavigationItem link={navItem} active={true} key={navItem}>
          {jsUcfirst(navItem)}
        </NavigationItem>
      );

    return (
      <NavigationItem link={navItem} active={false} key={navItem}>
        {jsUcfirst(navItem)}
      </NavigationItem>
    );
  });
  return <ul className={styles.NavigationItems}>{nav}</ul>;
};

export default navigationItems;
