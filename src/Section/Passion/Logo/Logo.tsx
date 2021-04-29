import React from "react";

import styles from "./Logo.module.css";

const Logo = (props: any) => {
  return (
    <div className={styles.Img}>
      {props.children}
      {/* <img alt="profile" src={props.logo}></img> */}
    </div>
  );
};

export default Logo;
