"use client"
import React from 'react';
import styles from "../styles/Projects.module.scss";

// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';



const Slide = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><p className='text-navy text-lg mb-5 text-center'>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.</p><a onClick={()=> window.open("https://github.com/rebecca-kurtis", "_blank")}><img src="/images/AboutMe_Rebecca.jpeg" alt=""/></a></SwiperSlide>
      <SwiperSlide><p className='text-navy text-lg mb-5 text-center'>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.</p><a onClick={()=> window.open("https://github.com/rebecca-kurtis", "_blank")}><img src="/images/AboutMe_Rebecca.jpeg" alt=""/></a></SwiperSlide>
      <SwiperSlide><p className='text-navy text-lg mb-5 text-center'>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.</p><a onClick={() => window.open("https://github.com/rebecca-kurtis", "_blank")}><img src="/images/AboutMe_Rebecca.jpeg" alt=""/></a></SwiperSlide>


    </Swiper>
  );
};


// export const Projects: React.FC<ProjectsProps> = ({}) => {
  export const Projects = () => {
    return (
      <div>
        Test component
        <div className={styles.slideshow}>
        <Slide />
      </div>
        {/* {slider} */}
      </div>
    );
}