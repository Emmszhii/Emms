import React from 'react';
import Article from './Article';
import forkify from '../../assets/forkifyapplication.png';
import expenseTracker from '../../assets/expense-tracker.png';
import foodOrder from '../../assets/foodorder.png';
import faceDetectionExpression from '../../assets/face_detection_expression.png';
import presentMeet from '../../assets/present-meet.png';
import './portfolio.css';

const data = [
  {
    id: '1',
    image: forkify,
    title: 'Forkify Application',
    github: 'https://github.com/Emmszhii/forkify-application',
    demo: 'https://forkify-application.onrender.com/',
  },
  {
    id: '2',
    image: expenseTracker,
    title: 'Expense Tracker',
    github: 'https://github.com/Emmszhii/Expense-Tracker',
    demo: 'https://github.com/Emmszhii/Expense-Tracker',
  },
  {
    id: '3',
    image: foodOrder,
    title: 'Food Order Application',
    github: 'https://github.com/Emmszhii/forkify-application',
    demo: 'https://github.com/Emmszhii/Food-Order-App',
  },
  {
    id: '4',
    image: faceDetectionExpression,
    title: 'Face Detection and Expression',
    github: 'https://github.com/Emmszhii/Face-Detection-Face-Expressions',
    demo: 'https://face-detection-and-expression.onrender.com',
  },
  {
    id: '5',
    image: presentMeet,
    title: 'Present Meet',
    github: 'https://github.com/Emmszhii/Present-Meet-v2',
    demo: 'https://present-meet.onrender.com',
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
