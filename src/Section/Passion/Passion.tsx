import React from "react";

import styles from "./Passion.module.css";
import Logo from "./Logo/Logo";

const Passion = (props: any) => {
  return (
    <section className={styles.Content} id="passion">
      {/* <Backdrop show></Backdrop> */}
      <div className={styles.Passion}>
        <h2>What I do</h2>
        <ul>
          <Logo></Logo>
          <Logo></Logo>
          <Logo></Logo>
        </ul>
        <ul>
          <li>
            <div className={styles.Container}>
              <h3>Development</h3>
              <p>
                With a strong foundation in computer science, I'm passionate
                about web design and development, and interested in mobile app
                development. As I grow as a developer, I hope to write clean,
                readable code that can be used by others and leveraged to create
                beautiful software.
              </p>
            </div>
          </li>
          <li>
            <div className={styles.Container}>
              <h3>Build</h3>
              <p>
                With a strong foundation in computer science, I'm passionate
                about web design and development, and interested in mobile app
                development. As I grow as a developer, I hope to write clean,
                readable code that can be used by others and leveraged to create
                beautiful software.
              </p>
            </div>
          </li>
          <li>
            <div className={styles.Container}>
              <h3>Colaborate</h3>
              <p>
                With a strong foundation in computer science, I'm passionate
                about web design and development, and interested in mobile app
                development. As I grow as a developer, I hope to write clean,
                readable code that can be used by others and leveraged to create
                beautiful software.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Passion;
