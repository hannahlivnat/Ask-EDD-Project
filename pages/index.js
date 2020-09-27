import Head from 'next/head'
import Navigation from '../components/nav'
import Header from '../components/header'
import Main from '../components/main_container'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ask Edd Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Navigation />
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
