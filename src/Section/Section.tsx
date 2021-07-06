import About from "./About/About";
import Contact from "./Contact/Contact";
import Intro from "./Intro/Intro";
import Passion from "./Passion/Passion";
import Work from "./Work/Work";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Section = ({ changeSection }: any) => {
  const [refIntro, inViewIntro] = useInView({
    /* Optional options */
    rootMargin: "-200px 0px 0px 0px",
  });
  const [refAbout, inViewAbout] = useInView({
    /* Optional options */
    rootMargin: "-200px 0px 0px 0px",
  });
  const [refPassion, inViewPassion] = useInView({
    /* Optional options */
    rootMargin: "-200px 0px 0px 0px",
  });
  const [refWork, inViewWork] = useInView({
    /* Optional options */
    rootMargin: "-200px 0px 0px 0px",
  });
  const [refContact, inViewContact] = useInView({
    /* Optional options */
    threshold: 0.9,
  });

  useEffect(() => {
    if (inViewContact) {
      changeSection("contact");
    } else {
      if (inViewIntro) {
        changeSection("intro");
      } else if (inViewAbout) {
        changeSection("about");
      } else if (inViewPassion) {
        changeSection("work");
      } else if (inViewWork) {
        changeSection("projects");
      }
    }
  }, [
    inViewIntro,
    inViewAbout,
    inViewPassion,
    inViewWork,
    inViewContact,
    changeSection,
  ]);

  return (
    <>
      <Intro ref={refIntro}></Intro>
      <About ref={refAbout}></About>
      <Passion ref={refPassion}></Passion>
      <Work ref={refWork}></Work>
      <Contact ref={refContact}></Contact>
    </>
  );
};

export default Section;
