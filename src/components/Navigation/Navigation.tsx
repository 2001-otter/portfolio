import React, { useEffect, useRef, useState } from "react";

import styles from "./Navigation.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";

const Navigation = (props: any) => {
  let listenerRef: any = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let listener = listenerRef.current;
    listener = document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement!.scrollTop;
      if (scrolled >= 70) {
        if (!isScrolled) {
          setIsScrolled(true);
        }
      } else {
        if (isScrolled) {
          setIsScrolled(false);
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [isScrolled]);

  return (
    <header className={isScrolled ? styles.Scrolled : styles.Top}>
      <div className={styles.Name}>
        <span>Nicolas Theodarus</span>
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems currentSection={props.currentSection} />
      </nav>
    </header>
  );
};

export default Navigation;
