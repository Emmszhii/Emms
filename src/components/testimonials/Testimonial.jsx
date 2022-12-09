import React from 'react';

const Testimonial = (props) => {
  const { name, avatar, review } = props.data;
  return (
    <article className="testimonial">
      <div className="client__avatar">
        <img src={avatar} alt={name} />
      </div>
      <h5 className="client__name">{name}</h5>
      <small className="client_review">{review}</small>
    </article>
  );
};

export default Testimonial;
