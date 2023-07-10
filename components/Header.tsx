import React from "react";
import styles from "../src/app/page.module.scss";
import { NavLinks } from "./NavLinks";


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
