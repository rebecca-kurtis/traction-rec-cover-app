import Image from 'next/image';
import Head from 'next/head';
import styles from './page.module.scss';
import { Header } from '../../components/Header';
import { WelcomeHeader } from '../../components/WelcomeHeader';
import { About } from '../../components/About';
import { Projects } from '../../components/Projects.js';
import { Footer } from '../../components/Footer';
import { WhyCompany } from '../../components/WhyCompany';
import { WhyMe } from '../../components/WhyMe';
import { Skills } from '../../components/Skills';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Rebecca Kurtis Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&family=Shrikhand&display=swap" rel="stylesheet"></link>
      </Head>
      <Header></Header>
      <WelcomeHeader></WelcomeHeader>
      <About></About>
      <Projects></Projects>
      <WhyCompany></WhyCompany>
      <WhyMe></WhyMe>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  )
}
