import {serviceCategories, serviceListings } from '/src/components/serviceData.js'
import hero from '/src/assets/service-hero.jpg'
import FAQ from '/src/components/FaqAccordion.jsx'
import {FaArrowDown} from 'react-icons/fa'
const Service = () => {
    return (
      <div className="service">
        <div className="service-hero">
        <img src={hero} alt="" className="hero-img" />
        <div className="hero-desc">
             <h1>Service</h1>
        </div>
        </div>
        <section className="service-categories">
          <h2 className='header'>Service Categories</h2>
          <ul className='categories'>
            {serviceCategories.map((category) => (
              <li className='trip' key={category.id}>
                <img className='trip-img' src={category.image} alt="" />
                <h3 className="trip-header">{category.name}</h3>
                <p>{category.description}</p>
              </li>
            ))}
          </ul>
        </section>
  
        <section className="service-listings">
          <h2 className='header'>Service Listings</h2>
          <div className="listing-grid">
            {serviceListings.map((listing) => (
              <div className="listing-card" key={listing.id}>
                <img className='service-img' src={listing.image} alt={listing.title} />
                <h3>{listing.title}</h3>
                <p>{listing.description}</p>
                <p>Duration: {listing.duration}</p>
                <p>Price: {listing.price}</p>
                <button className='service-btn'>Book Now</button>
              </div>
            ))}
          </div>
        </section>
  
        <section className="booking-information">
  <h2 className='header'>Booking Information</h2>
  <p>Booking your adventure with AfriQuest is easy and hassle-free. Follow these simple steps to get started:</p>
  <ol>
    <li>Explore our service categories and listings to find your desired adventure.</li>
    <li>Click on the "Book Now" button on the listing you wish to book.</li>
    <li>Fill out the booking form with your details, including travel dates and any special requests.</li>
    <li>Review your booking information and confirm your reservation.</li>
    <li>Make a secure online payment to complete your booking.</li>
  </ol>
  <p>Once your booking is confirmed, you'll receive a confirmation email with all the details of your adventure. Our team is available 24/7 to assist you with any questions or changes to your booking. We look forward to helping you create unforgettable memories!</p>
</section>
<FAQ/>
  
        <section className="cta">
          <h2 className='header'>Ready to embark on an unforgettable journey?</h2>
          <button className='cta-btn'>Book Your Adventure</button>
        </section>
      </div>
    );
  };
  
  export default Service;
  