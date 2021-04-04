import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, info, title }) => {
  const [btn, setBtn] = useState(false);

  const additionalText = () => {
    setBtn(!btn);
  };

  return (
    <article className='question' key={id}>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => additionalText()}>
          {btn ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {btn && <p>{info}</p>}
    </article>
  );
};

export default Question;
