import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [state, setState] = useState([])

  const fetching = async () => {
    const res = await fetch(`https://guarded-island-36639.herokuapp.com/api/effects`)
    const result = await res.json();
    if(result) {
      setState(result.data)
    }
  }
  useEffect(()=> {
    fetching();
  },[])
  return (
    <div className="App">
      {
        state.map((item, index) => <div key={index}>{item.attributes.num}</div>)
      }
    </div>
  );
}

export default App;
