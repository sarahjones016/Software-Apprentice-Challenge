import React from 'react'

function FacebookCard({facebookCampaign}) {
  return (
    <div className='campaignCard'>
        <h2>Campaign: <b>{facebookCampaign.campaign_name}</b></h2>
        <h3>Adset: <b>{facebookCampaign.media_buy_name}</b></h3>
        <h3>Creative: <b>{facebookCampaign.ad_name}</b></h3>
        <h3>Spend: $<b>{facebookCampaign.spend}</b></h3>
        <h3>Impressions: <b>{facebookCampaign.impressions}</b></h3>
        <h3>Clicks: <b>{facebookCampaign.clicks}</b></h3>
    </div>
  )
}

export default FacebookCard