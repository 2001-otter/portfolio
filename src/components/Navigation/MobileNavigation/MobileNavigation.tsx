import React from 'react';
import { useState } from 'react';

import styles from './MobileNavigation.module.css';

interface MobileNavigationProps {
  currentSection: string;
}
const MobileNavigation: React.FC<MobileNavigationProps> = ({
  currentSection,
}) => {
  const [view, setView] = useState<boolean>(false);
  console.log(view);
  function jsUcfirst(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const navList = ['about', 'work', 'projects', 'contact'];
  let counter = 0;
  const nav = navList.map((navItem) => {
    counter++;
    return (
      <nav
        key={counter}
        className={
          navItem !== currentSection
            ? styles.Item
            : [styles.Item, styles.Active].join(' ')
        }
      >
        <a href={'#' + navItem}>{jsUcfirst(navItem)}</a>
      </nav>
    );
  });
  return (
    <div className={styles.MobileNavigation}>
      <i
        className='fas fa-bars'
        onClick={() => {
          setView((prevState) => !prevState);
        }}
      ></i>

      {view && (
        <div className={styles.Dropdown}>
          <ul className={styles.Items}>{nav}</ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
