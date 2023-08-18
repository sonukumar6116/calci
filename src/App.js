import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [total, settotal] = useState("");

  const handleclick = (e) => {
    { settotal(total.concat(e.target.name)) }
  }

  const Clear = () => {
    settotal("");
  }

  const back = () => {
    settotal(total.slice(0, -1));
  }

  const Result = () => {
    try {
      settotal(eval(total).toString());
    } catch (err) {
      setTimeout(() => {
        settotal("")
      }, 500);
        settotal("Error")
    }
  }

  return (
    <>
      <div className="container">
        <div className="calci-o">
          <h2>Calculator</h2>
          <textarea className="display" type="text" value={total} placeholder="Calculate" />

          <div className="calci">
            <div className="col">
              <button onClick={Clear}>AC</button>
              <button onClick={back}><i className="fa-solid fa-delete-left" style={{ color: "#000000" }} /></button>
              <button onClick={handleclick} name='%'>%</button>
              <button onClick={handleclick} name='/'>/</button>
            </div>
            <div className="col">
              <button onClick={handleclick} name='7'>7</button>
              <button onClick={handleclick} name='8'>8</button>
              <button onClick={handleclick} name='9'>9</button>
              <button onClick={handleclick} name='*'>*</button>
            </div>
            <div className="col">
              <button onClick={handleclick} name='4'>4</button>
              <button onClick={handleclick} name='5'>5</button>
              <button onClick={handleclick} name='6'>6</button>
              <button onClick={handleclick} name='-'>-</button>
            </div>
            <div className="col">
              <button onClick={handleclick} name='1'>1</button>
              <button onClick={handleclick} name='2'>2</button>
              <button onClick={handleclick} name='3'>3</button>
              <button onClick={handleclick} name='+'>+</button>
            </div>
            <div className="col">
              <button onClick={handleclick} name='0'>0</button>
              <button onClick={handleclick} name='.'>.</button>
              <button onClick={Result} name='=' className='equal'>=</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
