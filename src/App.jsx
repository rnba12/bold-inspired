import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Posts from './components/Posts/Posts'
import Footer from './components/Footer/Footer'
import Socials from './components/Socials/Socials'

function App() {

  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Hero/>
      <Posts/>
      <About/>
      <Socials/>
      <Footer/>
    </main>
    </>
  )
}

export default App
