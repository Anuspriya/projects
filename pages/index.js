import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <h1>NextJS Concepts</h1>

        <div className={styles.grid}>
          <a
            href="/ssr"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              SSR
            </h2>
            <p className={inter.className}>
              Server side Rendering
            </p>
           
          </a>

          <a
            href="/staticProps"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              SSG 
            </h2>
            <p className={inter.className}>
              Get Static Props
            </p>
          </a>

          <a
            href="/ssg"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              SSG
            </h2>
            <p className={inter.className}>
              Get Static Paths
            </p>
          </a>

          <a
            href="/isr"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              ISR
            </h2>
            <p className={inter.className}>
              Incremental Static Regeneration
            </p>
          </a>

          <a
            href="/csr"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              CSR
            </h2>
            <p className={inter.className}>
              Client Side Rendering
            </p>
          </a>

          <a
            href="/article"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Articles
            </h2>
            <p className={inter.className}>
              View all articles
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}