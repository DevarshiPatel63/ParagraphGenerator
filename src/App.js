import React, { useState } from 'react';
import data from './data';
function App() {
const [text,setText] = useState([]);
const [count,setCount] = useState(0);

    function a(event){
      setCount(event.target.value);
       console.log(event.target.value);
    }

    function loremGen(event){
      // setText(data.slice(0,count));
      setText([]);
      for (let index = 0; index < count; index++) {
          setText(prevText => {
            return [...prevText,data[index%8]]
          });
      }
      event.preventDefault();
    }

  return (
    <section className='section-center' >
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={loremGen}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={a}
        />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map(item => <p>{item}</p>)} 
      </article>
    </section>
  );
}

export default App;