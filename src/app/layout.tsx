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
       <link href={googleUrl} rel="stylesheet"></link> 
        </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
