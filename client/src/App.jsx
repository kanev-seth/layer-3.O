import React from 'react'
import LandingPg from './components/LandingPg'
import PrizePool from './components/PrizePool'
import Navbar from './components/Navbar'
import Tracks from './components/Tracks'
import Schedule from './components/Schedule'
import FAQ from './components/FAQ'
import Sponsers from './components/Sponsers'
import Venue from './components/Venue'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPg />
      <PrizePool />
      <Tracks />
      <Schedule />
      <FAQ />
      <Sponsers />
      <Venue />
      <Footer />
    </div>
  )
}

export default App
