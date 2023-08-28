import React from 'react'

function SnapchatCard({snapchatCampaign}) {
  return (
    <div className='campaignCard'>
        <h2>Campaign: <b>{snapchatCampaign.campaign_name}</b></h2>
        <h3>Adset: <b>{snapchatCampaign.ad_squad_name}</b></h3>
        <h3>Creativ: <b>{snapchatCampaign.creative_name}</b></h3>
        <h3>Spend: $<b>{snapchatCampaign.cost}</b></h3>
        <h3>Impressions: <b>{snapchatCampaign.impressions}</b></h3>
        <h3>Clicks: <b>{snapchatCampaign.post_clicks}</b></h3>
    </div>
  )
}

export default SnapchatCard