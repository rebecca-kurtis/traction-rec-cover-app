"use client"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import bootstrap from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import styles from "../src/app/page.module.scss";

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
      <div className={styles.burgerBar}>
      <FaBars  onClick={toggleShow} size="xl" />
      </div>
      <Offcanvas className={styles.offCanvasMenuComponent} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={styles.offCanvasTitle}>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='offcanvas-menu-list'>
          <div className={styles.offcanvasMenuList}>
    
              <Link className={styles.navLinkCanvas} href={'#about'}>About</Link>
              <Link className={styles.navLinkCanvas} href={'#projects'}>Projects</Link>
              <Link className={styles.navLinkCanvas} href={'#why-company'}>Why Company</Link>
              <Link className={styles.navLinkCanvas} href={'#why-me'}>Why Me</Link>
              <Link className={styles.navLinkCanvas} href={'#skills'}>Skills</Link>
              <a className={styles.navLinkCanvas} href={resumeURL} target='_blank' rel="noreferrer noopener">Resume</a>
          
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}