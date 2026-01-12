import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zélie Carmelle | Portfolio</title>
        <meta name="description" content="Portfolio de Zélie Carmelle, étudiante en ingénierie informatique spécialisée en Big Data et Data Science." />
      </Head>

      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
