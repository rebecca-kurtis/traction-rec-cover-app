"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styles from "../src/app/page.module.scss";
import OffcanvasMenu from "./OffcanvasMenu";

interface NavLinksProps {}

export const NavLinks: React.FC<NavLinksProps> = ({}) => {
  const [showHamburger, setShowHamburger] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 940) {
        setShowHamburger(false);
      } else {
        setShowHamburger(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let resumeURL = "https://www.canva.com/design/DAFe48gVHUw/peIjbospFpI7OdNlL18CDA/view?utm_content=DAFe48gVHUw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink";


  return (
    <div className={styles.headerNav}>

{!showHamburger && 
        <nav>
        <Link className={styles.navLink} href={'#about'}>About</Link>
        <Link className={styles.navLink} href={'#projects'}>Projects</Link>
        <Link className={styles.navLink} href={'#why-company'}>Why Company</Link>
        <Link className={styles.navLink} href={'#why-me'}>Why Me</Link>
        <Link className={styles.navLink} href={'#skills'}>Skills</Link>
        <a className={styles.navLink} href={resumeURL} target='_blank' rel="noreferrer noopener">Resume</a>
        </nav>}
        {showHamburger && <OffcanvasMenu placement={"end"}/>}
    </div>
    
  );
};

