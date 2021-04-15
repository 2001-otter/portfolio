import About from "./About/About";
import Intro from "./Intro/Intro";
import Passion from "./Passion/Passion";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";

const Section = (props: any) => {
  return (
    <>
      <Intro></Intro>
      <About></About>
      <Passion></Passion>
      <Work></Work>
      <Contact></Contact>
    </>
  );
};

export default Section;
