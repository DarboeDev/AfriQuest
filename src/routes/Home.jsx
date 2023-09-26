import React from 'react'
import Hero from '../components/hero'
import Destination from '../components/Destination'
import RecentTrips from '../components/RecentTrips'

const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <Destination/>
      <RecentTrips/>
    </div>
  )
}

export default Home