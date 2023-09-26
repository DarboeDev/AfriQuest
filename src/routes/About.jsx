import React from 'react'
import aboutData from '/src/components/aboutData.js'
import hero from '/src/assets/about-hero.jpg'
const About = () => {
  return (
    <section className="about">
              <img src={hero} alt="" className="hero-img" />
        <div className="hero-desc">
             <h1>About</h1>
         </div>
         <div className="about-content">
            {
                aboutData.map(item =>(
                    <div className="text" key={item.id}>
                        <h1 className="header">{item.title}</h1>
                        <p>
                            {item.content}
                        </p>
                    </div>
                ))
            }
         </div>
    </section>
  )
}

export default About
