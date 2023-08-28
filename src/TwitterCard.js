import React from 'react'

function TwitterCard({twitterCampaign}) {
  return (
    <div className='campaignCard'>
        <h2>Campaign: <b>{twitterCampaign.campaign}</b></h2>
        <h3>Adset: <b>{twitterCampaign.ad_group}</b></h3>
        <h3>Creative: <b>{twitterCampaign.image_name}</b></h3>
        <h3>Spend: <b>{twitterCampaign.spend}</b></h3>
        <h3>Impressions: <b>{twitterCampaign.impressions}</b></h3>
        <h3>Clicks: <b>{twitterCampaign.post_clicks}</b></h3>
    </div>
  )
}

export default TwitterCard