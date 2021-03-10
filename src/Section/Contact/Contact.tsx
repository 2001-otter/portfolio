import React from 'react';

import styles from './Contact.module.css';

const Contact = (props: any) => {
  return(
    <section className={styles.Content}>
      {/* <Backdrop show></Backdrop> */}
      <div className={styles.Contact}>
        <h2>Hi, I'm Nicolas</h2>
        <span>I build things for the web</span>
      </div>
    </section>
  );
};

export default Contact;