import React,{useState, useRef} from 'react'
import image from '/src/assets/contact-hero.jpeg'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_ggbvyxq',
       'template_4nadqrd', 
           form.current,
        'R-YIrfW-dqA99JTuz')
        .then((result) => {
            console.log(result.text);
              // Clear the form fields after a successful submission
      form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
        console.log("sent");
    };
  return (
    <section className="contact">
        <div className="section-one">
            <h3 className="header">Contact</h3>
            <form className='contact-form'ref={form} onSubmit={sendEmail}>
                <input className='input' type="text" placeholder='Name' name="user_name"/>
                <input className='input' type="email" placeholder='Email' name="user_email" />
                <input className='input' type="text" placeholder='Subject' name="user_subject" />
                <textarea className='textarea' type="textarea" placeholder='Message' name="message" />
                <button className="cta-btn" type="submit">Send</button>
            </form>
            
        </div>
      <img src={image} alt="" />
    </section>
  )
}

export default Contact