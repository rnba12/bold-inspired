import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Posts from './components/Posts/Posts'
import Footer from './components/Footer/Footer'
import Socials from './components/Socials/Socials'

function App() {

  return (
    <>
      <Navbar/>
      <Posts/>
      <Hero/>
      <Socials/>
      <Footer/>
    </>
  )
}

export default App
