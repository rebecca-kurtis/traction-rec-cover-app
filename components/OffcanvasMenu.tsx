"use client"
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const options = [
  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  },
];

export default function OffCanvasExample({...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  let resumeURL = "https://www.canva.com/design/DAFe48gVHUw/peIjbospFpI7OdNlL18CDA/view?utm_content=DAFe48gVHUw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink";

  return (
    <>
      <div className="burgerBar">
      <FaBars  onClick={toggleShow} size="xl" />
      </div>
      <Offcanvas className="offCanvasMenuComponent" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offCanvasTitle">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <div className="offcanvasMenuList">
    
              <Link className="navLinkCanvas" href={'#about'}>About</Link>
              <Link className="navLinkCanvas" href={'#projects'}>Projects</Link>
              <Link className="navLinkCanvas" href={'#why-company'}>Why Company</Link>
              <Link className="navLinkCanvas" href={'#why-me'}>Why Me</Link>
              <Link className="navLinkCanvas" href={'#skills'}>Skills</Link>
              <a className="navLinkCanvas" href={resumeURL} target='_blank' rel="noreferrer noopener">Resume</a>
          
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}