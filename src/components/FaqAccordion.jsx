import React, {useState} from 'react';
import { FaArrowDown } from 'react-icons/fa';
import faqData from '/src/components/faqData.js'; 

const FAQ = () => {
  const [index, setIndex] = useState(null)

  function handleShow(id){
    setIndex(id)

  }
  return (
    <section className="faq">
      <h2 className='header'>Frequently Asked Questions</h2>
      <div className="faqs">
        {faqData.map((item) => (
          <div className="faq-question" key={item.id}  onClick={()=> handleShow(item.id) }>
            <h3>
              {item.id}. {item.question} <FaArrowDown className='arrow' />
            </h3>
            <p className={index == item.id ? 'faq-show' :'faq-hide'}>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
