import './globals.css';
import styles from '../styles/burger.module.scss';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rebecca Kurtis Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let googleUrl = "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&family=Shrikhand&display=swap";

  return (
    <html lang="en">
       <Head>
       <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={googleUrl} rel="stylesheet"></link> 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" async></script>

        </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
