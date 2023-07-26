import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface WelcomeHeaderProps {

}

export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({}) => {
    return (
      <div className="welcomeHeader">
        <div className="welcomeImageBlock">
        <Image
              src="/images/pexels-igor-haritanovich-1687341-large.jpg"
              className="welcomeImage"
              fill={true}
              alt="fern-leaves"
            />
        </div>
        <div className="welcomeTextBlock">
          <div className="welcomeHeaderSpacer"></div>
          <h1> Welcome Company!</h1>
          <p> Normal cover letters are boring, and what better way to showcase my skills then by building a custom cover letter just for you!</p>
          <h3> Enjoy!</h3>
          <Link href={'#about'} className="learnMore">Learn more about me</Link>
        </div>
      </div>
    );
}