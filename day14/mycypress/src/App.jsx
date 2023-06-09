import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [count,setCount] = useState(0)

  const getCounter = () => {
    axios.get("http://localhost:8080/counter").then((res)=>{
      setCount(res.data.value)
    })
  }

  useEffect(()=>{
    getCounter()
  },[])

  

  const handleAdd = () => {
    // setCount(prev => prev + 1)
    axios.post("http://localhost:8080/counter", {value: count+1}).then((res)=>{
      setCount(res.data.value)
    })
  }

  const handleReduce = () => {
    setCount(prev => prev - 1)
  }
  // const handleReset = () => {
  //   setCount(0)
  // }
  return (
    <div className="App">
       <h1 data-testid="counter">Counter: {count}</h1>
       <button data-testid="add-button" onClick={handleAdd}>Add</button>
       <button data-testid="reduce-button" onClick={handleReduce}>Reduce</button>
       {/* <button data-testid="reset" onClick={handleReset}>Reset</button> */}
    </div>
  );
}

export default App;
