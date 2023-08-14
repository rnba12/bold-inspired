import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Posts from './components/Posts/Posts'
import Footer from './components/Footer/Footer'
import Subscribe from './components/Subscribe/Subscribe'

function App() {

  return (
    <>
      <Navbar/>
    <main>
      <Hero/>
      <Posts/>
      <About/>
      <Subscribe/>
      <Footer/>
    </main>
    </>
  )
}

export default App
