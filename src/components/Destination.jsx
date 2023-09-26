import React from 'react'
import data from './DestinationData'

const Destination = () => {
  return (
    <section className="des-section">
        <h1 className='header'>Popular Destinations</h1>
        <p>Tours gives you an opportunity to see how beautiful Africa truly is</p>
        <div className="destinations">
            {
                data.map(place =>(
                    <div className={place.cname} key={place.id}>
                        <div className="des-text">
                            <h1 className="place">{place.title}</h1>
                            <p className="place-desc">
                                {place.text}
                            </p>
                        </div>
                        <div className="img-container">
                            <img src={place.image1} alt="" />
                            <img src={place.image2} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Destination