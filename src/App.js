import './App.css';
import { useState, useEffect} from 'react';
import CardContainer from './CardContainer'

function App() {

const [allPlatformData, setAllPlatformData] = useState([])

useEffect(() => {
  fetch('http://localhost:3000/fakeDataSet')
  .then(resp => resp.json())
  .then((data) => {
    setAllPlatformData(data)
  })
}, [])

  return (
    <div className="App">
      <h1>Blueprint Software Engineer Apprentice Challenge</h1>
      <div>
          <CardContainer allPlatformData={allPlatformData}/>
      </div>
    </div>
  );
}

export default App;
