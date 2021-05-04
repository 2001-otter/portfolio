import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";

import igLogo from "../../assets/img/socmed_logo/ig_logo.png";
import githubLogo from "../../assets/img/socmed_logo/github_logo.png";
import triangle from "../../assets/img/triangle2.png";
import smallTriangle from "../../assets/img/triangle3.png";

import Box from "./Box/Box";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = (props: any) => {
  function _calculateScrollbarWidth() {
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      window.innerWidth - document.documentElement.clientWidth + "px"
    );
  }
  // recalculate on resize
  window.addEventListener("resize", _calculateScrollbarWidth, false);
  // recalculate on dom load
  document.addEventListener(
    "DOMContentLoaded",
    _calculateScrollbarWidth,
    false
  );

  // recalculate on load (assets loaded as well)
  window.addEventListener("load", _calculateScrollbarWidth);

  // const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);
  // const updateDimensions = () => {
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight);
  //   console.log(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", updateDimensions);
  //   return () => window.removeEventListener("resize", updateDimensions);
  // }, []);

  const socmeds = [
    {
      name: "instagram",
      logo: igLogo,
      link: "https://www.instagram.com/nicolas.ot/",
    },
    {
      name: "github",
      logo: githubLogo,
      link: "https://github.com/nicolas-ot",
    },
  ];

  const socmedBoxs = socmeds.map((socmed) => {
    return (
      <Box
        link={socmed.link}
        key={socmed.name}
        img={socmed.logo}
        name={socmed.name}
      ></Box>
    );
  });

  var image = (
    <img
      src={triangle}
      alt="triangle"
      style={{
        width: "calc(100vw - var(--scrollbar-width))",
        height: "4rem",
      }}
    />
  );
  // if (width < 600) {
  //   console.log("tes");
  //   image = (
  //     <img
  //       src={smallTriangle}
  //       alt="triangle"
  //       style={{
  //         width: "calc(100vw - var(--scrollbar-width))",
  //         height: "4rem",
  //       }}
  //     />
  //   );
  // }

  return (
    <>
      <section className={styles.Content} id="contact">
        {image}
        <h1>Contact</h1>
        <div className={styles.Form}>
          <Form>
            <Form.Group controlId="name">
              <Form.Control type="text" placeholder="name" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="message" />
            </Form.Group>
          </Form>
          {/* <button>tes</button> */}
          <Button variant="light">Submit</Button>
        </div>
        <div className={styles.Arrow}>
          <a href={"#about"}>
            <i
              className="fas fa-arrow-circle-up fa-3x"
              // onClick={faClickHandle()}
            ></i>
          </a>
        </div>
        <div className={styles.Socmed}>{socmedBoxs}</div>
      </section>
    </>
  );
};

export default Contact;
