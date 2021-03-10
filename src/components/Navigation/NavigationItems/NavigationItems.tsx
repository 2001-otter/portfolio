import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/about" exact>About</NavigationItem>
        <NavigationItem link="/passion">Passion</NavigationItem>
        <NavigationItem link="/experience">Experience</NavigationItem>
        <NavigationItem link="/work">Work</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
);

export default navigationItems;