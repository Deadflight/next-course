import Head from 'next/head'
import Image from 'next/image'
import { FC } from 'react'
import Navbar from '../Navbar'
import styles from './MainLayout.module.css'

const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Carlos</title>
        <meta name="description" content="Home Page" />
        <meta name="keywords" content='nextjs, react, javascript, web development' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default MainLayout