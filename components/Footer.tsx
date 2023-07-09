import React from 'react';
import styles from "../styles/Footer.module.scss";
import Image from "next/image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedIn } from '';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({}) => {
  let linkedInUrl = "https://www.linkedin.com/in/rebeccakurtis/";
  let githubUrl = "https://github.com/rebecca-kurtis/";
    return (
      <div className={styles.footerContainer}>
        <div className={styles.footerIconContainer}>
         <a href={linkedInUrl} target="__blank" > <FaLinkedin className={styles.footerIcons} /></a>
         <a href={githubUrl} target="__blank" > <FaGithub className={styles.footerIcons} /></a>
        </div>
        <div className={styles.footerCopyrightContainer}>
        <p className={styles.copyrightText}>© 2023 Rebecca Kurtis</p>
        </div>
        
      </div>
    );
}