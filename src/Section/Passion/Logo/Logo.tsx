import React from 'react';

import image from '../../../assets/img/usj.jpg';
import styles from './Logo.module.css';

const Logo = (props: any) => {
  return(
    <div className={styles.Img}>
      <img alt="profile" src={image}></img>
    </div>
  );
};

export default Logo;