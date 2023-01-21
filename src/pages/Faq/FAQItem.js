import { useState } from "react";

function FAQItem({ question, answer }) {
  const [isActive, setIsActive] = useState(false);

  function handleIsActive() {
    setIsActive(!isActive);
  }

  return (
    <div className="item" onClick={handleIsActive}>
      <div className="question">
        <h3>{question}</h3>
        <span>{isActive ? '-' : '+'}</span>
      </div>
      <div className={isActive ? 'answer active-item' : 'answer'}>
        <p>{answer}</p>
      </div>
    </div>

  );
}

export default FAQItem;

