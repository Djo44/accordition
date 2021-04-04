import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [question, setQuestions] = useState(data);

  console.log(question);

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {data.map((x) => {
            return <SingleQuestion {...x} key={x.id} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
