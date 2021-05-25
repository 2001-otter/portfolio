import React from "react";

import styles from "./About.module.css";
// @ts-ignore
import image from "../../assets/img/1.JPG";

import htmlLogo from "../../assets/img/html-logo.jpg";
import cssLogo from "../../assets/img/css-logo.png";
import javascriptLogo from "../../assets/img/javascript-logo.svg";
import nextjsLogo from "../../assets/img/nextjs-logo.svg";
import javaLogo from "../../assets/img/java-logo.svg";
import reactLogo from "../../assets/img/react-logo.png";
import githubLogo from "../../assets/img/github-logo.png";
import cplusplusLogo from "../../assets/img/cplusplus-logo.png";
import tsLogo from "../../assets/img/ts-logo.png";
import mysqlLogo from "../../assets/img/mysql-logo.png";

const About = React.forwardRef<any>((props: any, ref) => {
  return (
    <>
      {/* <div className={styles.Dummy}></div> */}
      <section className={styles.Content} id="about" ref={ref}>
        <div className={styles.Left}>
          <div className={styles.About}>
            <h2>About me</h2>
            {/* <hr className={styles.One}></hr>
            <hr className={styles.Two}></hr>
            <hr className={styles.Three}></hr> */}
            <div className={styles.Img}>
              {/* <img alt="profile" src={image}></img> */}
            </div>
            <p>
              Becoming a developer has been my passion ever since I learned
              about web development in highschool. Now, I'm a first year student
              at Technische Universität Berlin pursuing a degree in information
              science. Through my code, I'm hoping to somehow make the world a
              better place. I'm looking for a career that will allow me to grow
              as a person and as a programmer.
              <br />
              <br />
              When not online, I enjoy playing guitar, reading books, and
              jogging.
              {/* <br />
              <br />
              <a href="#contact">
                If you think we should make something awesome together, let me
                know!
              </a> */}
              <br />
              <br />
              Current location: Berlin, Germany
            </p>
          </div>
        </div>
        <div className={styles.Right}>
          <div className={styles.Tools}>
            <h2>Technologies I've been working with</h2>
            <div className={styles.Logo}>
              <div>
                <img src={htmlLogo} alt="htmlLogo"></img>
              </div>
              <div>
                <img src={cssLogo} alt="cssLogo"></img>
              </div>
              <div>
                <img src={javascriptLogo} alt="javascriptLogo"></img>
              </div>
              <div>
                <img src={reactLogo} alt="reactLogo"></img>
              </div>
              <div>
                <img src={tsLogo} alt="tsLogo"></img>
              </div>
              <div className={styles.Black}>
                <img src={nextjsLogo} alt="nextjsLogo"></img>
              </div>
              <div>
                <img src={cplusplusLogo} alt="cplusplusLogo"></img>
              </div>
              <div>
                <img src={javaLogo} alt="javaLogo"></img>
              </div>
              <div className={styles.Black}>
                <img src={githubLogo} alt="githubLogo"></img>
              </div>
              <div>
                <img src={mysqlLogo} alt="mysqlLogo"></img>
              </div>
            </div>
          </div>
          <div className={styles.Preferred}>
            <h2>Projects and opportunities I'm interested in</h2>
            <ul>
              <li>Web developing projects</li>
              <li>
                Projects that will allow me to chanel and develop my creative
                and logical thinking skill
              </li>
              <li>
                Projects that help developers and programmers (e.g. Github,
                Codepen, and Bootstrap)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
});

export default About;
