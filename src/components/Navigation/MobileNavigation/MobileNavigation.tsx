import React, { Dispatch, SetStateAction } from 'react';

import styles from './MobileNavigation.module.css';

interface MobileNavigationProps {
  setView: Dispatch<SetStateAction<boolean>>;
}
const MobileNavigation: React.FC<MobileNavigationProps> = ({ setView }) => {
  return (
    <div className={styles.MobileNavigation}>
      <div className={styles.Name} data-aos='fade-down'>
        <a href='https://nicolas-ot.github.io/portfolio/'>Nicolas Theodarus</a>
      </div>
      <div className={styles.ButtonContainer}>
        <button
          className={styles.BarButton}
          onClick={() => setView((prevState) => !prevState)}
        >
          <i className='fas fa-bars fa-2x'></i>
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;
