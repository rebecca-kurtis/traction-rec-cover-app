import React from 'react';
import Image from 'next/image';
interface AboutProps {

}

export const About: React.FC<AboutProps> = ({}) => {
    return (
      <div className="aboutContainer" id='about'>
       
        <div className="aboutTextBlock">
          <div className="aboutMeSpacer"></div>
          <h2>About Me</h2>
          <p>My name is Rebecca and I am a full-stack developer. </p>

          <p> Ever since I was little, I have loved taking things apart and putting them back together to figure out how they run. It always fascinated me when I would figure it out and how even the smallest piece is essential to make it work. I have always loved learning and trying new things, especially how there is always something new being discovered or developed.  </p>

          <p> I graduated from Thompson Rivers University with a Bachelor of Tourism Management specializing in Events and Festivals with a minor in Marketing right at the start of the pandemic in April 2020. Since events were not running at the time I went into Marketing and started working with website development. Beginning of 2022, I realized that my favourite part of the day was when I got to work on the website and build new pages so I decided to pursue education in web development.  </p> 

          <p> I discovered Lighthouse Labs, where I took their Web Development Bootcamp. I honestly loved every moment of it. The highs of figuring out a piece of code and the moments of challenge to figure out any issues I was having. It became all I talked about for a bit (sorry friends)! It was less like work or school and more something I did for fun. I am incredibly grateful to have gained this experience and can&apos;t wait to see where my new skills take me!</p>
        </div>
        <div className="aboutImageBlock">
          <Image
                src="/images/AboutMe_Rebecca.jpeg"
                className="aboutImage"
                width={690}
                height={750}
                alt="rebecca"
              />
        </div>
      </div>
    );
}