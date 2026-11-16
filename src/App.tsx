import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Filmstrip } from './components/Filmstrip'
import { Stories } from './components/Stories'
import { Catalog } from './components/Catalog'
import { Massif } from './components/Massif'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Filmstrip />
        <Stories />
        <Catalog />
        <Massif />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
