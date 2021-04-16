import React from "react";

import styles from "./Passion.module.css";
import Logo from "./Logo/Logo";

import developmentLogo from "../../assets/img/development-logo.jpg";
import buildLogo from "../../assets/img/build-logo.png";

const Passion = (props: any) => {
  return (
    <section className={styles.Content} id="passion">
      {/* <Backdrop show></Backdrop> */}
      <div className={styles.Passion}>
        <h2>What I passionate about</h2>
        <div className={styles.Items}>
          <div className={styles.Item}>
            <Logo>
              <i className="fas fa-code fa-7x"></i>
            </Logo>
            <h3>Development</h3>
            <p>
              With a passion and strong foundation in programming, I'm eager to
              contribute to the world through my code. That's why I'm trying to
              improve everyday by not just writing a code that works, but also a
              clean and undesrstandable code, that does well what it is intended
              to do and can be reused by others.
            </p>
          </div>
          <div className={styles.Item}>
            <Logo>
              <i className="fas fa-tools fa-7x"></i>
            </Logo>
            <h3>Improve</h3>
            <p>
              "To be more and to do more"—a motto that I always adhere to. Life
              is a lifelong journey of improvement. I aspire to improve not only
              my technical skill, but also my soft skill as a programmer. I
              believe that to lead a meaningful life, it's essential to improve
              on every important aspect of life.
            </p>
          </div>
          <div className={styles.Item}>
            <Logo>
              <i className="fas fa-users fa-7x"></i>
            </Logo>
            <h3>Colaborate</h3>
            <p>
              Contrary to the popular image of a programmer: sitting alone in
              front of their computer in a dark room, I find that working in a
              team is a crucial part of developing a great project.
              Interchanging ideas, discussing the best solution to a problem,
              strengthening each other weaknesses; there are many advantages of
              working together in a team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passion;
