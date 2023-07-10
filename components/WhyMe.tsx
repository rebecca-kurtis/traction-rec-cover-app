"use client";
import React from "react";
import styles from "../src/app/page.module.scss";
import { CardComponent } from "./CardComponent";

interface WhyMeProps {}

export const WhyMe: React.FC<WhyMeProps> = ({}) => {
  return (
    <div className={styles.whyMeContainer} id="why-me">
      <div className={styles.whyMeHeader}>
        <div className={styles.whyMeHeaderColourBlock} />
        <div className={styles.whyMeHeaderTextBlock}>
          Why should the Company hire me?
        </div>
      </div>
      <div className={styles.whyMeSpacer} />
      <div className={styles.whyMePointsContainer}>
        <CardComponent
          cardTitle="Passion for design and UX"
          cardText="I have a strong desire to create software and online experiences that are both visually appealing and intuitive for users.
I am always looking for ways to make the user's journey through a website as seamless and enjoyable as possible.
I believe that design can change the way people interact with software."
        />
        <div className={styles.whyMePointsContainerSpacer} />
        <CardComponent
          cardTitle="Quickly adopt and learn"
          cardText="I pride myself on my ability to quickly learn and adapt to new technologies. (I am always curious to learn new technologies!)
One of the things I love about software development is that it's a never-ending learning journey and I am always looking for ways to expand my skills and knowledge in the field."
        />
        <div className={styles.whyMePointsContainerSpacer} />
        <CardComponent
          cardTitle="Collaboration"
          cardText="I believe that teamwork is key to achieving success, and I am committed to doing my part to contribute to the Company team's efforts.
Empathy and kindness are values that are important to me, and I try to incorporate them into my interactions with others."
        />
      </div>
    </div>
  );
};
