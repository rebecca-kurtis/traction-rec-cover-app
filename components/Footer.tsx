import React from 'react';
import styles from "../styles/Footer.module.scss";
import Image from "next/image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedIn } from '@fortawesome/free-solid-svg-icons'

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
      <div className={styles.footerContainer}>
        Footer
        <Image
          className={styles.footerIcons}
          src="/images/linkedin-white.svg"
          alt=""
          width={50}
          height={50}
        />
      </div>
    );
}