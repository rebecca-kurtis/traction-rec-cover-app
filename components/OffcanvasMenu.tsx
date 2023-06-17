"use client"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

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

  return (
    <>
      <div className={styles.burgerBar}>
      <FaBars  onClick={toggleShow} size="xl" />
      </div>
      <Offcanvas className={styles.offCanvasMenu} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='offcanvas-menu-list'>
          <div className={styles.offcanvasMenuList}>
    
              <Link className={styles.navLinkCanvas} href={'#about'}>About</Link>
              <Link className={styles.navLinkCanvas} href={'#projects'}>Projects</Link>
              <Link className={styles.navLinkCanvas} href={'#why-company'}>Why Company</Link>
              <Link className={styles.navLinkCanvas} href={'#why-me'}>Why Me</Link>
              <Link className={styles.navLinkCanvas} href={'#skills'}>Skills</Link>
              <a className={styles.navLinkCanvas} href='#' target='_blank' rel="noreferrer noopener">Resume</a>
          
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}