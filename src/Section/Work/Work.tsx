import React from 'react';

import styles from './Work.module.css';

const Work = (props: any) => {
  return(
    <section className={styles.Content}>
      {/* <Backdrop show></Backdrop> */}
      <div className={styles.Work}>
        <h2>Hi, I'm Nicolas</h2>
        <span>I build things for the web</span>
      </div>
    </section>
  );
};

export default Work;