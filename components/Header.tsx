import React from "react";
import { NavLinks } from "./NavLinks";


interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="headerContainer">
      <div className="headerName">
        <h2>Rebecca Kurtis</h2>
      </div>
      <NavLinks />
    </div>
  );
};
