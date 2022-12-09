import React from 'react';
import Article from './Article';
import forkify from '../../assets/forkifyapplication.png';
import './portfolio.css';

const data = [
  {
    id: '1',
    image: forkify,
    title: 'Forkify Application',
    github: 'https://github.com/Emmszhii/forkify-application',
    demo: 'https://github.com/Emmszhii/forkify-application',
  },
  {
    id: '2',
    image: forkify,
    title: 'Forkify Application',
    github: 'https://github.com/Emmszhii/forkify-application',
    demo: 'https://github.com/Emmszhii/forkify-application',
  },
  {
    id: '3',
    image: forkify,
    title: 'Forkify Application',
    github: 'https://github.com/Emmszhii/forkify-application',
    demo: 'https://github.com/Emmszhii/forkify-application',
  },
  {
    id: '4',
    image: forkify,
    title: 'Forkify Application',
    github: 'https://github.com/Emmszhii/forkify-application',
    demo: 'https://github.com/Emmszhii/forkify-application',
  },
  {
    id: '5',
    image: forkify,
    title: 'Forkify Application',
    github: 'https://github.com/Emmszhii/forkify-application',
    demo: 'https://github.com/Emmszhii/forkify-application',
  },
  {
    id: '6',
    image: forkify,
    title: 'Forkify Application',
    github: 'https://github.com/Emmszhii/forkify-application',
    demo: 'https://github.com/Emmszhii/forkify-application',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((item) => (
          <Article data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
