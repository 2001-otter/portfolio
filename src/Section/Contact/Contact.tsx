import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./Contact.module.css";

const Contact = (props: any) => {
  return (
    <section className={styles.Content} id="contact">
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
    </section>
  );
};

export default Contact;
