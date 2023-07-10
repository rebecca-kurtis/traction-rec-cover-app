import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../src/app/page.module.scss";

interface WelcomeHeaderProps {

}

export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({}) => {
    return (
      <div className={styles.welcomeHeader}>
        <div className={styles.welcomeImageBlock}>
        <Image
              
              src="/images/pexels-igor-haritanovich-1687341-large.jpg"
              className={styles.welcomeImage}
              fill={true}
              alt="fern-leaves"
            />
        </div>
        <div className={styles.welcomeTextBlock}>
          <div className={styles.spacer}></div>
          <h1> Welcome Company!</h1>
          <p> Normal cover letters are boring, and what better way to showcase my skills then by building a custom cover letter just for you!</p>
          <h3> Enjoy!</h3>
          <Link href={'#about'} className={styles.learnMore}>Learn more about me</Link>
        </div>
      </div>
    );
}