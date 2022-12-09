import React from 'react';

const Article = (props) => {
  const { image, title, github, demo } = props.data;
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={github} className="btn" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href={demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default Article;
