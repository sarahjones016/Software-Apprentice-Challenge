import React, {useState} from 'react'
import FacebookCard from './FacebookCard'
import TwitterCard from './TwitterCard'
import SnapchatCard from './SnapchatCard'
import GoogleAnalyticsCard from './GoogleAnalyticsCard'

function CardContainer({allPlatformData}) {

const [search, setSearch] = useState("")

function handleSearch(newSearch) {
  setSearch(newSearch)
}

const searchedFacebookData = allPlatformData.facebook_ads?.filter((facebookCampaign) => {
  if (search === "") {
    return true;
  } else {
    return facebookCampaign.campaign_name.toLowerCase().includes(search.toLowerCase())  
  }
})

const searchedTwitterData = allPlatformData.twitter_ads?.filter((twitterCampaign) => {
  if (search === "") {
    return true;
  } else {
    return twitterCampaign.campaign.toLowerCase().includes(search.toLowerCase())
  }
})

const searchedSnapchatData = allPlatformData.snapchat_ads?.filter((snapchatCampaign) => {
  if (search === "") {
    return true;
  } else {
    return snapchatCampaign.campaign_name.toLowerCase().includes(search.toLowerCase())
  }
})

const searchedGoogleAnalyticsData = allPlatformData.google_analytics?.filter((googleAnalyticsCampaign) => {
  if (search === "") {
    return true;
  } else {
    return googleAnalyticsCampaign.utm_campaign.toLowerCase().includes(search.toLowerCase())
  }
})

  return (
    <div>
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
      <div className='cardContainer'>
        {searchedFacebookData?.map((facebookCampaign) => {
            return <FacebookCard facebookCampaign={facebookCampaign}/>
        })}
        {searchedTwitterData?.map((twitterCampaign) => {
            return <TwitterCard twitterCampaign={twitterCampaign}/>
        })}
        {searchedSnapchatData?.map((snapchatCampaign) => {
            return <SnapchatCard snapchatCampaign={snapchatCampaign}/>
        })}
        {searchedGoogleAnalyticsData?.map((googleAnalyticsCampaign) => {
            return <GoogleAnalyticsCard googleAnalyticsCampaign={googleAnalyticsCampaign}/>
        })}
      </div>
    </div>
  )
}

export default CardContainer