import './App.css';
import { useState, useEffect} from 'react';
import CardContainer from './CardContainer'

function App() {

const [facebookData, setFacebookData] = useState([])
const [twitterData, setTwitterData] = useState([])
const [snachatData, setSnapchatData] = useState([])
const [googleAnalyticsData, setGoogleAnalyticsData] = useState([])

useEffect(() => {
  fetch('http://localhost:3000/fakeDataSet')
  .then(resp => resp.json())
  .then((data) => {
    setFacebookData(data.facebook_ads)
    setTwitterData(data.twitter_ads)
    setSnapchatData(data.snapchat_ads)
    setGoogleAnalyticsData(data.google_analytics)
  })
}, [])

  return (
    <div className="App">
      <h1>Blueprint Software Engineer Apprentice Challenge</h1>
     <div>
      <CardContainer facebookData={facebookData} twitterData={twitterData} snachatData={snachatData} googleAnalyticsData={googleAnalyticsData}/>
     </div>
    </div>
  );
}

export default App;
