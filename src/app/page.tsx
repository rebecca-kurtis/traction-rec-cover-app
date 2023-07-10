import Image from "next/image";
import Script from "next/script";
import Head from "next/head";
import "./globals.css";
import { Header } from "../../components/Header";
import { WelcomeHeader } from "../../components/WelcomeHeader";
import { About } from "../../components/About";
import { Projects } from "../../components/Projects.js";
import { Footer } from "../../components/Footer";
import { WhyCompany } from "../../components/WhyCompany";
import { WhyMe } from "../../components/WhyMe";
import { Skills } from "../../components/Skills";

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Rebecca Kurtis Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&family=Shrikhand&display=swap"
          rel="stylesheet"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
          crossOrigin="anonymous"
          async
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossOrigin="anonymous"
          async
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin="anonymous"
          async
        ></script>

        <script>var Alert = ReactBootstrap.Alert;</script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
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
  );
}
