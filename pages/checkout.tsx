import Head from 'next/head';
import ServiceContent from '@/components/service-content';

import styles from '@/styles/Home.module.css';

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Energy Service in React</title>
        <meta name="description" content="Energy Service in React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ServiceContent />
      </main>
    </>
  )
}
