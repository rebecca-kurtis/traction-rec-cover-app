import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import { NavLinks } from "./NavLinks";
import OffcanvasMenu from "./OffcanvasMenu";
// import { HamburgerMenu } from './HamburgerMenu';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerName}>
        <h2>Rebecca Kurtis</h2>
      </div>
      <NavLinks />
    </div>
  );
};
