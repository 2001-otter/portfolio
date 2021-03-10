import React from 'react';

import styles from './Navigation.module.css';
import NavigationItems from './NavigationItems/NavigationItems';

const Navigation = (props: any) => {
  return(
    <header className={styles.Navigation}>
        <div className={styles.Name}>
            <span>Nicolas Theodarus</span>
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
  );
};

export default Navigation;