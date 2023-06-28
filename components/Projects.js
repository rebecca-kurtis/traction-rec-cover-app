"use client";
import React from "react";
import styles from "../styles/Projects.module.scss";

// import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

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
      onSlideChange={() => console.log("slide change")}
    >
      <div>
      <SwiperSlide>
        <p className="text-navy text-lg mb-5 text-center">
          Aunt Bottie is an app for buying plants as gifts and creating a
          personal card via Open AI. It is a React TypeScript app supported by
          an Express server, PostgreSQL database, SASS processor and ChatGPT
          api.
        </p>
        <a
          onClick={() =>
            window.open("https://github.com/rebecca-kurtis/bottie", "_blank")
          }
        >
          <Image
            className={styles.slideImage}
            src="/images/Homepage.png"
            alt=""
            width={1200}
            height={730}
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <p className="text-navy text-lg mb-5 text-center">
          Interview Scheduler is a single-page application (SPA) that allows
          users to book technical interviews between students and mentors. The
          front end of this project is built with React and makes requests to an
          API to fetch and store appointment data from a database.
        </p>
        <a
          onClick={() =>
            window.open("https://github.com/rebecca-kurtis/scheduler", "_blank")
          }
        >
          <Image
            className={styles.slideImage}
            src="/images/Main-scheduler-page.png"
            alt=""
            width={1200}
            height={730}
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <p className="text-navy text-lg mb-5 text-center">
          Built as a midterm project for Lighthouse Labs. QUIZHOOT is an app
          that lets you create quizzes and share them between your friends! The
          creator of the quiz can view and share all the results at the end of
          the quiz.
        </p>
        <a
          onClick={() =>
            window.open("https://github.com/rebecca-kurtis/quizhoot", "_blank")
          }
        >
          <Image
            className={styles.slideImage}
            src="/images/quizhoot-homepage1.png"
            alt=""
            width={1200}
            height={730}
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <p className="text-navy text-lg mb-5 text-center">
          Tweeter is a simple, single-page Twitter clone. Built to practice
          HTML, CSS, JS, jQuery and AJAX front-end skills, and Node, Express
          back-end skills.
        </p>
        <a
          onClick={() =>
            window.open("https://github.com/rebecca-kurtis/tweeter", "_blank")
          }
        >
          <Image
            className={styles.slideImage}
            src="/images/Tweeter-homepage.png"
            alt=""
            width={1200}
            height={730}
          />
        </a>
      </SwiperSlide>
      </div>
      
    </Swiper>
  );
};

// export const Projects: React.FC<ProjectsProps> = ({}) => {
export const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsSpacer} />
      <h2 className={styles.projectsHeader}>Projects</h2>
      <div className={styles.slideshowContainer}>
        <Slide className={styles.slideshow} />
      </div>
      <div className={styles.projectsSpacer} />
    </div>
  );
};
