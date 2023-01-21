import React, { useState } from 'react';
import '../../assets/css/FAQPage__style.css';
import TanslateOpacity from '../../utils/TranslateOpacity.js';
import FaqCollection from '../../data/FaqCollection.js';
import FAQItem from './FAQItem';
function FAQ() {
  return (
    <section className={TanslateOpacity() ? 'faqs show-item' : 'faqs hide-item'}>
      <div className="head">
        <div className="container title">
          <h2>let's <strong>answer </strong> your  frequency <strong> questions : </strong></h2>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          {
            FaqCollection.map((item, index) => (
              <FAQItem key={index}
                id={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default FAQ;


// FaqCollection.map((item, index) => (

//   <div className="item" key={index} onClick={() => changeAccordion(index)}>
//     <div className="question">
//       <h3>{item.question}</h3>
//       <span>{accordion === index ? '-' : '+'}</span>
//     </div>
//     <div className={accordion === index ? 'answer active-item' : 'answer'}>
//       <p>{item.answer}</p>
//     </div>
//   </div>
