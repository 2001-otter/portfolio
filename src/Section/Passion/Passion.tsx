import React from "react";
import styles from "./Passion.module.css";

import Logo from "./Logo/Logo";

const Passion = React.forwardRef<any>((props: any, ref) => {
  return (
    <section className={styles.Content} id="work" ref={ref}>
      {/* <Backdrop show></Backdrop> */}
      <div className={styles.Passion}>
        <h2>What I can help you with</h2>
        <div className={styles.Items}>
          <div className={styles.Item}>
            <Logo>
              <i className="fas fa-code fa-7x"></i>
            </Logo>
            <h3>Front End Development</h3>
            <p>
              With a passion and strong foundation in programming, I'm eager to
              contribute to the world through my code. A code that not only
              works, but also a code that is clean and easy to read, that does
              well what is intended to do and can be reused by others.
            </p>
          </div>
          <div className={styles.Item}>
            <Logo>
              <i className="fas fa-tools fa-7x"></i>
            </Logo>
            <h3>Product Development</h3>
            <p>
              I'm interested in helping you get your creative idea into the
              world. Creating and maintaining product development roadmaps to
              prioritize, summarize and communicate the plans to build and
              ultimately release the product. This is where the magic happens.
            </p>
          </div>
          <div className={styles.Item}>
            <Logo>
              <i className="fas fa-search fa-7x"></i>
            </Logo>
            <h3>Performance & SEO</h3>
            <p>
              A website is not done when it's "done"; there is always room for
              improvement. Building an optimized website that is fast, easy to
              find and turn users into customers is one of my main priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Passion;
