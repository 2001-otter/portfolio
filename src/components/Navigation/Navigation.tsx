import React, { useEffect, useRef, useState } from 'react';

import styles from './Navigation.module.css';
import NavigationItems from './NavigationItems/NavigationItems';
import MobileNavigation from './MobileNavigation/MobileNavigation';

interface NavigationProps {
  currentSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection }) => {
  let listenerRef: any = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={isScrolled ? styles.Scrolled : styles.Top}>
      <div className={styles.Name} data-aos='fade-down'>
        <a href='https://nicolas-ot.github.io/portfolio/'>Nicolas Theodarus</a>
      </div>
      <nav style={{ height: '100%' }}>
        <MobileNavigation currentSection={currentSection} />
        <NavigationItems currentSection={currentSection} />
      </nav>
    </header>
  );
};

export default Navigation;
