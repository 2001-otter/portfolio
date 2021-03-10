import React from 'react';

import About from './About/About';
import Intro from './Intro/Intro';
import Passion from './Passion/Passion';
import Experience from './Experience/Experience';
import Work from './Work/Work';
import Contact from './Contact/Contact';

const Section = (props: any) => {
  return(
    <React.Fragment>
      <Intro></Intro>
      <About></About>
      <Passion></Passion>
      <Experience></Experience>
      <Work></Work>
      <Contact></Contact>
    </React.Fragment>
  );
};

export default Section;