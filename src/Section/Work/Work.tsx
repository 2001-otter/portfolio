import React, { useState } from 'react';

import styles from './Work.module.css';

import Modal from '../../components/UI/Modal/Modal';
import Project from './Project/Project';
import ProjectView from './ProjectView/ProjectView';

import jbook1 from '../../assets/img/projects-screenshot/jbook/1.png';
import jbook2 from '../../assets/img/projects-screenshot/jbook/2.png';

import burgerOrder from '../../assets/img/projects-screenshot/burger-order.png';
import burger2 from '../../assets/img/projects-screenshot/burger-order/2.png';
import burger3 from '../../assets/img/projects-screenshot/burger-order/3.png';
import burger4 from '../../assets/img/projects-screenshot/burger-order/4.png';
import burger5 from '../../assets/img/projects-screenshot/burger-order/5.png';
import burger6 from '../../assets/img/projects-screenshot/burger-order/6.png';
import dnd from '../../assets/img/projects-screenshot/dnd.png';

import weatherApp from '../../assets/img/projects-screenshot/weather-app/3.png';
import weather1 from '../../assets/img/projects-screenshot/weather-app/1.png';
import weather2 from '../../assets/img/projects-screenshot/weather-app/2.png';

import reactProfile from '../../assets/img/projects-screenshot/react_profile.png';

import netflixClone from '../../assets/img/projects-screenshot/netflix_clone.png';

interface ProjectType {
  title: string;
  desc: string;
  longerDesc: string;
  pict: string[];
  tech: string;
  fullTech?: string[];
  source: string;
  site?: string;
}

const Passion = React.forwardRef<any>((props: any, ref) => {
  const projects: ProjectType[] = [
    {
      title: 'Jbook',
      desc: 'A React app for writing and compiling javascript code real time.',

      longerDesc:
        'Add and remove code-cell and text-cell, move it up and down, write documentary, and view the compiled result instantly' +
        ' Every package on the npm directories can be imported, including React.' +
        ' A build-in Prettier formatting support is also available.' +
        ' This project utilize fully typescript support for React.',
      pict: [jbook1, jbook2],
      tech: 'React · Typescript',
      fullTech: [
        'Axios',
        'Esbuild wasm',
        'Monaco editor',
        'React',
        'Typescript',
        'UNPKG',
      ],
      source: 'https://github.com/nicolas-ot/jbook',
      site: 'https://nicolas-ot.github.io/jbook/',
    },
    {
      title: 'Burger Order',
      desc:
        'A web app for building and ordering your own burger.' +
        ' Add as many ingredients as you want. You can also see your order history',
      longerDesc:
        'Burger Order is a React web app that was build with implementation of Firebase for the database.' +
        ' Create your own account so you can see your order history.' +
        ' This project was made to sharpen my understanding of the advance parts of React.',
      pict: [burgerOrder, burger2, burger3, burger4, burger5, burger6],
      tech: 'React',
      fullTech: ['Axios', 'CSS', 'Firebase', 'Jest', 'React', 'Redux'],
      source: 'https://github.com/nicolas-ot/burger-order',
      site: 'https://burger-builder-1efe7.firebaseapp.com/',
    },
    {
      title: 'Weather App',
      desc: 'A simple weather app.',

      longerDesc: 'An app to know the weather in any city across the globe.',
      pict: [weatherApp, weather1, weather2],
      tech: 'React · Typescript',
      fullTech: ['React', 'Sass', 'Typescript'],
      source: 'https://github.com/nicolas-ot/weather-app',
      site: 'https://nicolas-ot.github.io/weather-app/',
    },
    {
      title: 'Project Manager',
      desc: 'A project manager with drag-and-drop implementation.',
      longerDesc:
        'This is a small web app project that was built solely with typescript and css for managing projects.' +
        ' You can add new projects that will automatically assigned to active projects.' +
        ' The projects can then be moved freely with drag-and-drop between Active Projects and Finished Projects',

      pict: [dnd],
      tech: 'Typescript',
      fullTech: ['Typescript', 'CSS'],

      source: 'https://github.com/nicolas-ot/task-manager',
      site: 'https://nicolas-ot.github.io/task-manager/',
    },
    {
      title: 'React Profile',
      desc: 'My website portfolio',
      longerDesc: '',

      pict: [reactProfile],
      tech: 'React',
      fullTech: ['React', 'CSS', 'Bootstrap'],
      source: 'https://github.com/nicolas-ot/portfolio',
    },
    {
      title: 'Netflix Clone',
      desc: 'A clone of Netflix',
      longerDesc: 'This is a netflix clone built mostly using php',
      pict: [netflixClone],
      tech: 'PHP · HTML · JS · CSS · MySQL',
      fullTech: ['Axios', 'CSS', 'Firebase', 'Jest', 'React', 'Redux'],
      source: 'https://github.com/nicolas-ot/netflix-clone',
    },
  ];

  const [viewing, setViewing] = useState(false);
  const [viewedProject, setViewedProject] = useState<ProjectType>();

  let projectView = null;

  const clickHandler = (project: any) => {
    setViewing(true);
    setViewedProject(project);
  };

  const clickAwayHandler = () => {
    setViewing(false);
  };

  if (viewedProject) {
    projectView = (
      <ProjectView
        title={viewedProject.title}
        desc={viewedProject.longerDesc}
        pict={viewedProject.pict}
        source={viewedProject.source}
        site={viewedProject?.site}
        fullTech={viewedProject.fullTech}
        clicked={clickAwayHandler}
      ></ProjectView>
    );
  }

  let idCounter = 0;
  const projectsComponent = projects.map((project) => {
    idCounter++;
    return (
      <Project
        key={idCounter}
        id={idCounter}
        onClick={() => clickHandler(project)}
        title={project.title}
        desc={project.desc}
        pict={project.pict[0]}
        tech={project.tech}
      ></Project>
    );
  });

  return (
    <section className={styles.Content} id='projects' ref={ref}>
      <Modal show={viewing} modalClosed={clickAwayHandler}>
        {projectView}
      </Modal>
      <div className={styles.Passion}>
        <h2 data-aos='slide-right' data-aos-duration='700'>
          My projects
        </h2>
        <div className={styles.Items}>{projectsComponent}</div>
      </div>
    </section>
  );
});

export default Passion;
