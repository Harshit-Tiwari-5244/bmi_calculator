import { eventWrapper } from '@testing-library/user-event/dist/utils';
import './App.css';
import React, {useState} from 'react';

function App() {
// making state of our application
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState('');

  //logics
  let calcBmi = (event) => {

    //prevent submitting to the server
    event.preventDefault();

    if(weight === 0 || height ===0){
      alert("please enter valid input")
    }else{
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage('You are under Weight')
      }else if(bmi>=25 && bmi<30){
        setMessage('You are a healthy Weight')
      }else{
        setMessage('You are overweight')
      }
    }
  }

  // Reload
  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (ibs)</label>
            <input type='text' placeholder='Enter weight value' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input type='text' placeholder='Enter height value' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
