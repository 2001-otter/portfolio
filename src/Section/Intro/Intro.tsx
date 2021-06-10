import React from "react";

import styles from "./Intro.module.css";

const Intro = React.forwardRef<any>((props: any, ref) => {
  return (
    <section className={styles.Content} id="Intro" ref={ref}>
      {/* <Backdrop show></Backdrop> */}
      <div className={styles.Intro}>
        <h3 data-aos="fade-down" data-aos-delay="600">
          Hi, I'm Nicolas
        </h3>
        <span data-aos="fade-up" data-aos-delay="1000">
          I love to code and to be a Front-End Software Engineer
        </span>
      </div>
    </section>
  );
});

export default Intro;
