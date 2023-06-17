"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import { FaBars } from "react-icons/fa";
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


  return (
    <div className={styles.headerNav}>

{!showHamburger && 
        <nav>
        <Link className={styles.navLink} href={'#about'}>About</Link>
        <Link className={styles.navLink} href={'#projects'}>Projects</Link>
        <Link className={styles.navLink} href={'#why-company'}>Why Company</Link>
        <Link className={styles.navLink} href={'#why-me'}>Why Me</Link>
        <Link className={styles.navLink} href={'#skills'}>Skills</Link>
        <a className={styles.navLink} href='#' target='_blank' rel="noreferrer noopener">Resume</a>
        </nav>}
        {showHamburger && <OffcanvasMenu placement={"end"}/>}
    </div>
    
  );
};

