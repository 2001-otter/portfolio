import React from 'react';

import styles from './Experience.module.css';

const Experience = (props: any) => {
  return(
    <section className={styles.Content}>
      {/* <Backdrop show></Backdrop> */}
      <div className={styles.Experience}>
        <h2>EXPERIENCE</h2>
        <p>I've been doing web development for about 3 years now, 
          and I'm always eager to learn more in this fast paced industry.
        </p>
      </div>
      <div className={styles.BottomPart}>
        <div className={styles.Technologies}>
          <h3>Some technologies I've worked with:</h3>
        </div>
        <div className={styles.Achievements}>
          <h3>Some achievements:</h3>
        </div>
      </div>
    </section>
  );
};

export default Experience;