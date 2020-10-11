import Head from "next/head";
import Navigation from "../components/nav";
import Header from "../components/header";
import Contact from "../components/contact_page";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ask Edd Project- Contac us</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container'>
        <Navigation />
        <Header />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
