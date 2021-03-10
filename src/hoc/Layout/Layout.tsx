import React from 'react';

import styles from './Layout.module.css';
import Navigation from '../../components/Navigation/Navigation';

const Layout = (props: any) => {
  return(
    <React.Fragment>
      <Navigation></Navigation>
      <main className={styles.Content}>
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default Layout;