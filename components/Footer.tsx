import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({}) => {
  let linkedInUrl = "https://www.linkedin.com/in/rebeccakurtis/";
  let githubUrl = "https://github.com/rebecca-kurtis/";
  let emailUrl = "mailto:reakurtis@gmail.com";
  let resumeUrl = "https://www.canva.com/design/DAFe48gVHUw/peIjbospFpI7OdNlL18CDA/view?utm_content=DAFe48gVHUw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink";

    return (
      <div className="footerContainer">
        <div className="footerIconContainer">
         <a href={linkedInUrl} target="__blank" > <FaLinkedin className="footerIcons" /></a>
         <a href={githubUrl} target="__blank" > <FaGithub className="footerIcons" /></a>
         <a href={emailUrl} target="__blank" > <AiOutlineMail className="footerIcons" /></a>
         <a href={resumeUrl} target="__blank" > <HiOutlineDocumentText className="footerIcons" /></a>
        </div>
        <div className="footerCopyrightContainer">
        <p>© 2023 Rebecca Kurtis</p>
        </div>
        
      </div>
    );
}