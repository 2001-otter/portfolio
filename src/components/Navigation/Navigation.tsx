import React, { useEffect, useRef, useState } from 'react';

import styles from './Navigation.module.css';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';

interface NavigationProps {
  currentSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection }) => {
  let listenerRef: any = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    let listener = listenerRef.current;
    listener = document.addEventListener('scroll', () => {
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
      document.removeEventListener('scroll', listener);
    };
  }, [isScrolled]);

  function jsUcfirst(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const navList = ['about', 'work', 'projects', 'contact'];
  let counter = 0;
  const nav = navList.map((navItem) => {
    counter++;
    return (
      <li key={counter}>
        <a
          className={
            navItem !== currentSection
              ? styles.Item
              : [styles.Item, styles.Active].join(' ')
          }
          href={'#' + navItem}
          onClick={() => setView(false)}
        >
          {jsUcfirst(navItem)}
        </a>
      </li>
    );
  });

  return (
    <>
      <div className={isScrolled ? styles.Scrolled : styles.Top}>
        <nav style={{ width: '100%', height: '100%' }}>
          <div className={styles.NavContainer}>
            <MobileNavigation setView={setView} />
            <DesktopNavigation currentSection={currentSection} />
          </div>
        </nav>
      </div>
      <div
        className={
          view ? styles.Dropdown : [styles.Dropdown, styles.Hidden].join(' ')
        }
      >
        <ul className={styles.Items}>{nav}</ul>
      </div>
    </>
  );
};

export default Navigation;
