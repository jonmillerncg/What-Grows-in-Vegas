import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Produce from '@/components/Produce'
import Territory from '@/components/Territory'
import Values from '@/components/Values'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import BCorpBar from '@/components/BCorpBar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Produce />
        <Territory />
        <Values />
        <Team />
        <Contact />
      </main>
      <BCorpBar />
      <Footer />
    </>
  )
}
