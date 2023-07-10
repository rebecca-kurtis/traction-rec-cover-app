import React from "react";

//import languages icons
import { IoLogoJavascript } from "react-icons/io";
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
    <div className="skillsContainer" id='skills'>
      <h2>Skills</h2>
      <div>
        <p>Languages</p>
        <IoLogoJavascript className="skillIcon" />
        <SiTypescript className="skillIcon" />
        <DiRubyRough className="skillIcon" />
        <AiFillHtml5 className="skillIcon" />
        <DiCss3 className="skillIcon" />
      </div>
      <div>
        <p>Libraries & Environments:</p>
        <FaNodeJs className="skillIcon" />
        <GrReactjs className="skillIcon" />
        <TbBrandNextjs className="skillIcon" />
        <SiRubyonrails className="skillIcon" />
        <SiExpress className="skillIcon" />
        <SiJquery className="skillIcon" />
        <FaSass className="skillIcon" />
        <SiDotenv className="skillIcon" />
        <SiAxios className="skillIcon" />
      </div>
      <div>
        <p>Systems & Databases:</p>
        <TbSql className="skillIcon" />
        <SiPostgresql className="skillIcon" />
        <BsGit className="skillIcon" />
      </div>
      <div>
        <p>Testing:</p>
        <SiMocha className="skillIcon" />
        <SiChai className="skillIcon" />
        <SiJest className="skillIcon" />
        <SiStorybook className="skillIcon" />
        <SiCypress className="skillIcon" />
      </div>
     
    </div>
  );
};
