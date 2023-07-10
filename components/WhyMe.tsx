"use client";
import React from "react";
import { CardComponent } from "./CardComponent";

interface WhyMeProps {}

export const WhyMe: React.FC<WhyMeProps> = ({}) => {
  return (
    <div className="whyMeContainer" id="why-me">
      <div className="whyMeHeader">
        <div className="whyMeHeaderColourBlock" />
        <div className="whyMeHeaderTextBlock">
          Why should the Company hire me?
        </div>
      </div>
      <div className="whyMeSpacer" />
      <div className="whyMePointsContainer">
        <CardComponent
          cardTitle="Passion for design and UX"
          cardText="I have a strong desire to create software and online experiences that are both visually appealing and intuitive for users.
I am always looking for ways to make the user's journey through a website as seamless and enjoyable as possible.
I believe that design can change the way people interact with software."
        />
        <div className="whyMePointsContainerSpacer" />
        <CardComponent
          cardTitle="Quickly adopt and learn"
          cardText="I pride myself on my ability to quickly learn and adapt to new technologies. (I am always curious to learn new technologies!)
One of the things I love about software development is that it's a never-ending learning journey and I am always looking for ways to expand my skills and knowledge in the field."
        />
        <div className="whyMePointsContainerSpacer" />
        <CardComponent
          cardTitle="Collaboration"
          cardText="I believe that teamwork is key to achieving success, and I am committed to doing my part to contribute to the Company team's efforts.
Empathy and kindness are values that are important to me, and I try to incorporate them into my interactions with others."
        />
      </div>
    </div>
  );
};
