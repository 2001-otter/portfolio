import React from "react";

import styles from "./Layout.module.css";
import Navigation from "../../components/Navigation/Navigation";
import IntersectionContext from "../../store/intersection-context";

const Layout = (props: any) => {
  return (
    <IntersectionContext.Consumer>
      {(ctx: any) => {
        return (
          <React.Fragment>
            <Navigation currentSection={ctx.section}></Navigation>
            <main className={styles.Content}>{props.children}</main>
            <footer>Designed and build by Nicolas</footer>
          </React.Fragment>
        );
      }}
    </IntersectionContext.Consumer>
  );
};

export default Layout;
