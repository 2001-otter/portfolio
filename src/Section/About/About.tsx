import React from "react";

import styles from "./About.module.css";
import image from "../../assets/img/usj.jpg";

const About = (props: any) => {
  return (
    <section className={styles.Content} id="about">
      <div className={styles.About}>
        <h2>A little bit about me</h2>
        <img alt="profile" src={image}></img>
        <p>
          I'm a web developer with a passion for front end development. I'm
          currently a first year student at Technische Universität Berlin
          pursuing a degree in information science. I aspire toward a career
          that will allow me to channel my creativity through crafting beautiful
          software and engaging experiences.
          <br />
          <br />
          When I'm not on the computer, I enjoy playing guitar, jogging, and
          petting dogs.
        </p>
      </div>
    </section>
  );
};

export default About;
