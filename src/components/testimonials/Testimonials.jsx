import React from 'react';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import Testimonial from './Testimonial';
import './testimonials.css';

// Import Swiper module
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    name: 'Fatma Martinez',
    avatar: AVTR1,
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minima illum obcaecati vitae ipsum fugit maiores, pariatur, nulla sed ad laborum corrupti qui praesentium veritatis aspernatur harum. Nihil, obcaecati iste!',
  },
  {
    id: 2,
    name: 'Tianna Bartlett',
    avatar: AVTR2,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quaerat amet nostrum reprehenderit officiis dicta cum distinctio aut deserunt quo quas, nesciunt quae. Atque aperiam accusamus modi laborum earum blanditiis!',
  },
  {
    id: 3,
    name: 'Anastasia Deleon',
    avatar: AVTR3,
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla vitae voluptatem laborum hic. Maiores, praesentium sint. Laborum voluptatem non consectetur at, alias harum rerum dolores quisquam amet, earum expedita!',
  },
  {
    id: 4,
    name: 'Jimmy Chase',
    avatar: AVTR4,
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe inventore tempore debitis doloremque! Ea non repudiandae, sapiente pariatur quae saepe ipsam id atque, et facere iste! Ipsa error placeat aut. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Testimonial data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
