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
          cardText="I'm deeply passionate about crafting software and online experiences that are as beautiful to look at as they are easy to use. I'm always looking for new ways to enhance the user experience to make it as smooth and enjoyable as I can. I believe that thoughtful design has the power to revolutionize how we interact with software. It's not just about aesthetics, it's about creating a connection and making our digital interactions feel more human."
        />
        <div className="whyMePointsContainerSpacer" />
        <CardComponent
          cardTitle="Quickly adopt and learn"
          cardText="My ability to quickly absorb and adapt to new technologies is something I take great pride in. The constant learning that comes with software development is something I love, I am always on the lookout for ways to deepen my knowledge. It's turned into more than a profession for me. It's become a passion that keeps my curiosity fueled and my skills growing."
        />
        <div className="whyMePointsContainerSpacer" />
        <CardComponent
          cardTitle="Collaboration"
          cardText="I'm a big believer in the power of teamwork and contributing to our collective goals. I always approach team work with empathy and kindness, values that are important to me. I make it a point to bring these into my interactions, fostering a culture of respect and understanding. It's not just about getting the job done, but also about how we treat each other along the way."
        />
      </div>
    </div>
  );
};
