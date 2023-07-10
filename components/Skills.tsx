import React from "react";
import styles from "../styles/Skills.module.scss";

//import languages icons
import { IoLogoJavascript } from "react-icons/Io";
import { DiRubyRough } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";

//import libraries icons
import { FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { SiRubyonrails } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { SiDotenv } from "react-icons/si";
import { SiJquery } from "react-icons/si";

//import systems icons
import { SiPostgresql } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { BsGit } from "react-icons/bs";

//import testing icons
import { SiMocha } from "react-icons/si";
import { SiChai } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiStorybook } from "react-icons/si";
import { SiCypress } from "react-icons/si";

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = ({}) => {
  return (
    <div className={styles.skillsContainer} id='skills'>
      <h2>Skills</h2>
      <div className={styles.languagesContainer}>
        <p>Languages</p>
        <IoLogoJavascript className={styles.skillIcon} />
        <SiTypescript className={styles.skillIcon} />
        <DiRubyRough className={styles.skillIcon} />
        <AiFillHtml5 className={styles.skillIcon} />
        <DiCss3 className={styles.skillIcon} />
      </div>
      <div className={styles.librariesContainer}>
        <p>Libraries & Environments:</p>
        <FaNodeJs className={styles.skillIcon} />
        <GrReactjs className={styles.skillIcon} />
        <TbBrandNextjs className={styles.skillIcon} />
        <SiRubyonrails className={styles.skillIcon} />
        <SiExpress className={styles.skillIcon} />
        <SiJquery className={styles.skillIcon} />
        <FaSass className={styles.skillIcon} />
        <SiDotenv className={styles.skillIcon} />
        <SiAxios className={styles.skillIcon} />
      </div>
      <div className={styles.systemsContainer}>
        <p>Systems & Databases:</p>
        <TbSql className={styles.skillIcon} />
        <SiPostgresql className={styles.skillIcon} />
        <BsGit className={styles.skillIcon} />
      </div>
      <div className={styles.testingContainer}>
        <p>Testing:</p>
        <SiMocha className={styles.skillIcon} />
        <SiChai className={styles.skillIcon} />
        <SiJest className={styles.skillIcon} />
        <SiStorybook className={styles.skillIcon} />
        <SiCypress className={styles.skillIcon} />
      </div>
     
    </div>
  );
};
