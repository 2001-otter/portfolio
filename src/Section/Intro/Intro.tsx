import React from "react";

import styles from "./Intro.module.css";

const Intro = (props: any) => {
  return (
    <section className={styles.Content} id="Intro">
      {/* <Backdrop show></Backdrop> */}
      <div className={styles.Intro}>
        <h3>Hi, I'm Nicolas</h3>
        <span>I'm a front-end software engineer</span>
      </div>
    </section>
  );
};

export default Intro;
