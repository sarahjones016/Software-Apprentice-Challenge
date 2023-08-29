import React, {useState} from 'react'
import GeneralCard from './GeneralCard'

function CardContainer({allPlatformData, googleAnalyticsData}) {

const [search, setSearch] = useState("")
const [sortValue, setSortValue] = useState("")

const combinedArrays = []

allPlatformData.facebook_ads?.map((facebookCampaign) => {
  return combinedArrays.push(facebookCampaign)
})
allPlatformData.twitter_ads?.map((twitterCampaign) => {
  return combinedArrays.push(twitterCampaign)
})
allPlatformData.snapchat_ads?.map((snapchatCampaign) => {
  return combinedArrays.push(snapchatCampaign)
})

function handleSearch(newSearch) {
  setSearch(newSearch)
}

const searchedData = combinedArrays.filter((campaign) => {
  if (search === "") {
      return true;
    } else {
      return (campaign.campaign_name || campaign.campaign).toLowerCase().includes(search.toLowerCase())  
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
          <select
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
          >
            <option value="">Sort By Spend</option>
            <option value="(a.spend || a.cost) > (b.spend || a.cost)">Ascending: Smallest To Largest</option>
            <option value="(b.spend || b.cost) > (a.spend || a.cost)">Descending: Largest To Smallest</option>
          </select>
        </div>
      </div>
      <div className='cardContainer'>
        {searchedData
          .sort((a, b) => (eval(sortValue) ? 1 : -1))
          .map((individualCampaign) => {
              return <GeneralCard individualCampaign={individualCampaign} googleAnalyticsData={googleAnalyticsData}/>
        })
       }
      </div>
    </div>
  )
}

export default CardContainer