import React from 'react'
import trips from './RecentTripsData'

const RecentTrips = () => {
  return (
    <section className="recent-trips">
        <h1 className="header">Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps</p>
        <div className="trips">
           {
            trips.map(trip=>(
                <div className="trip" key={trip.id}>
                    <img className='trip-img' src={trip.image1} alt="" />
                    <h1 className="trip-header">{trip.title}</h1>
                    <p>{trip.text}</p>
                </div>
            ))
           }
        </div>
    </section>
  )
}

export default RecentTrips