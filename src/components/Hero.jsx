import React from 'react'
import hero from '/src/assets/hero.jpg'

const Hero = () => {
  return (
    <section className="hero">
        <img src={hero} alt="" className="hero-img" />
        <div className="hero-desc">
            <h1>Your Journey Your Story</h1>
            <p>Choose Your Favorite Destination.</p>
            <button className="hero-btn">Travel Plan</button>
        </div>
    </section>
  )
}

export default Hero