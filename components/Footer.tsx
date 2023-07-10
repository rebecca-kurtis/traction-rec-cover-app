import React from 'react';
import styles from "../src/app/page.module.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";




interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({}) => {
  let linkedInUrl = "https://www.linkedin.com/in/rebeccakurtis/";
  let githubUrl = "https://github.com/rebecca-kurtis/";
  let emailUrl = "mailto:reakurtis@gmail.com";

    return (
      <div className={styles.footerContainer}>
        <div className={styles.footerIconContainer}>
         <a href={linkedInUrl} target="__blank" > <FaLinkedin className={styles.footerIcons} /></a>
         <a href={githubUrl} target="__blank" > <FaGithub className={styles.footerIcons} /></a>
         <a href={emailUrl} target="__blank" > <AiOutlineMail className={styles.footerIcons} /></a>
        </div>
        <div className={styles.footerCopyrightContainer}>
        <p className={styles.copyrightText}>© 2023 Rebecca Kurtis</p>
        </div>
        
      </div>
    );
}