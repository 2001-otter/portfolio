import React, { useEffect, useRef, useState } from "react";

import styles from "./Navigation.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";

const Navigation = (props: any) => {
  let listenerRef: any = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [section, setSection] = useState("intro");

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

      if (scrolled < 650) {
        if (section !== "intro") {
          setSection("intro");
        }
      } else if (scrolled < 1300) {
        if (section !== "about") {
          setSection("about");
        }
      } else if (scrolled < 1950) {
        if (section !== "passion") {
          setSection("passion");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [section, isScrolled]);

  return (
    <header className={isScrolled ? styles.Scrolled : styles.Top}>
      <div className={styles.Name}>
        <span>{section}</span>
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems section={section} />
      </nav>
    </header>
  );
};

export default Navigation;
