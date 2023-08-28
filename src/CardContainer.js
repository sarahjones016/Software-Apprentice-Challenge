import React from 'react'
import FacebookCard from './FacebookCard'
import TwitterCard from './TwitterCard'
import SnapchatCard from './SnapchatCard'
import GoogleAnalyticsCard from './GoogleAnalyticsCard'

function CardContainer({facebookData, twitterData, snachatData, googleAnalyticsData}) {


  return (
    <div>
      <div className='cardContainer'>
        {facebookData.map((facebookCampaign) => {
            return <FacebookCard facebookCampaign={facebookCampaign}/>
        })}
        {twitterData.map((twitterCampaign) => {
            return <TwitterCard twitterCampaign={twitterCampaign}/>
        })}
        {snachatData.map((snapchatCampaign) => {
            return <SnapchatCard snapchatCampaign={snapchatCampaign}/>
        })}
        {googleAnalyticsData.map((googleAnalyticsCampaign) => {
            return <GoogleAnalyticsCard googleAnalyticsCampaign={googleAnalyticsCampaign}/>
        })}
      </div>
    </div>
  )
}

export default CardContainer