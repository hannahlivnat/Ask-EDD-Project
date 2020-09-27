import Head from 'next/head'
import Navigation from './components/nav'
import Header from './components/header'
import Main from './components/main_container'
import Footer from './components/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ask Edd Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
