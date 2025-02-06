import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Feauter from './Components/Feauter'
import About from './Components/About'
import Testomonials from './Components/Testomonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='container'>
      <Header></Header>
      <Hero></Hero>
      <Feauter></Feauter>
      <About></About>
<Testomonials></Testomonials>
<Contact></Contact>
<Footer></Footer>
    </div>
  )
}

export default App
