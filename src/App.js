import './App.css';
import { useState, useEffect} from 'react';
import CardContainer from './CardContainer'

function App() {

const [facebookData, setFacebookData] = useState([])
const [twitterData, setTwitterData] = useState([])
const [snapchatData, setSnapchatData] = useState([])
const [googleAnalyticsData, setGoogleAnalyticsData] = useState([])
const [search, setSearch] = useState("")

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

function handleSearch(newSearch) {
  setSearch(newSearch)
}

const searchedFacebookData = facebookData.filter((facebookCampaign) => {
  if (search === "") {
    return true;
  } else {
    return facebookCampaign.campaign_name.toLowerCase().includes(search.toLowerCase())  
  }
})

const searchedTwitterData = twitterData.filter((twitterCampaign) => {
  if (search === "") {
    return true;
  } else {
    return twitterCampaign.campaign.toLowerCase().includes(search.toLowerCase())
  }
})

const searchedSnapchatData = snapchatData.filter((snapchatCampaign) => {
  if (search === "") {
    return true;
  } else {
    return snapchatCampaign.campaign_name.toLowerCase().includes(search.toLowerCase())
  }
})

const searchedGoogleAnalyticsData = googleAnalyticsData.filter((googleAnalyticsCampaign) => {
  if (search === "") {
    return true;
  } else {
    return googleAnalyticsCampaign.utm_campaign.toLowerCase().includes(search.toLowerCase())
  }
})

  return (
    <div className="App">
      <h1>Blueprint Software Engineer Apprentice Challenge</h1>
      <div className='searchAndFilterContainer'>
        <h2>Search & Filter Campaign Info</h2>
        <div className='campaignSearch'>
          <input 
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              placeholder="Search by campaign name..."
          ></input>
        </div>
        <div>
          <select>
            <option>Sort By Spend</option>
            <option>Ascending: Smallest To Largest</option>
            <option>Descending: Largest To Smallest</option>
          </select>
        </div>
      </div>
      
     <div>
        <CardContainer facebookData={searchedFacebookData} twitterData={searchedTwitterData} snachatData={searchedSnapchatData} googleAnalyticsData={searchedGoogleAnalyticsData}/>
     </div>
    </div>
  );
}

export default App;
