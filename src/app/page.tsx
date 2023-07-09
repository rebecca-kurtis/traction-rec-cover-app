import Image from 'next/image';
import Head from 'next/head';
import styles from './page.module.scss';
import { Header } from '../../components/Header';
import { WelcomeHeader } from '../../components/WelcomeHeader';
import { About } from '../../components/About';
import { Projects } from '../../components/Projects.js';
import { Footer } from '../../components/Footer';
import { WhyCompany } from '../../components/WhyCompany';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Rebecca Kurtis Portfolio</title>
      </Head>
      <Header></Header>
      <WelcomeHeader></WelcomeHeader>
      <About></About>
      <Projects></Projects>
      <WhyCompany></WhyCompany>
      <Footer></Footer>
    </div>
  )
}
