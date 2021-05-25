import React from "react";
import styles from "./Contact.module.css";

import igLogo from "../../assets/img/socmed_logo/ig_logo.png";
import githubLogo from "../../assets/img/socmed_logo/github_logo.png";
import triangle from "../../assets/img/triangle2.png";

import Box from "./Box/Box";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import emailjs from "emailjs-com";

const Contact = React.forwardRef<any>((props: any, ref) => {
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

  const onFormSubmit = (e: any) => {
    e.preventDefault();

    const fields = ["name", "email", "message"];

    const email: any = {
      name: "null",
      email: "null",
      message: "null",
    };

    fields.forEach((field) => {
      email[field] = (document.getElementById(field) as HTMLInputElement).value;

      (document.getElementById(field) as HTMLInputElement).value = "";
    });

    emailjs.send(
      "gmail",
      "template_mvwzdeh",
      email,
      "user_TlrDTDTr8V6ogaCbKcNiT"
    );
  };

  return (
    <>
      <section className={styles.Content} id="contact" ref={ref}>
        {image}
        <h1 data-aos="slide-right">Contact</h1>
        <div
          className={styles.Form}
          data-aos="slide-up"
          data-aos-duration="400"
        >
          <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="name">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Control as="textarea" rows={3} placeholder="Your Message" />
            </Form.Group>
            <Button variant="light" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className={styles.Arrow}>
          <a href={"#about"}>
            <i className="fas fa-arrow-circle-up fa-3x"></i>
          </a>
        </div>
        <div className={styles.Socmed}>{socmedBoxs}</div>
      </section>
    </>
  );
});

export default Contact;
