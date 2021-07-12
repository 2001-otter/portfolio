import styles from './DesktopNavigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props: any) => {
  function jsUcfirst(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const navList = ['about', 'work', 'projects', 'contact'];
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
  return (
    <div className={styles.DesktopNavigation}>
      <div className={styles.Name} data-aos='fade-down'>
        <a href='https://nicolas-ot.github.io/portfolio/'>Nicolas Theodarus</a>
      </div>
      <div className={styles.NavigationItems}>{nav}</div>
    </div>
  );
};

export default navigationItems;
