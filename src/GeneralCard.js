import React from 'react'

function GeneralCard({individualCampaign}) {

  return (
    <div className='campaignCard'>
        <h2>Campaign: <b>{(individualCampaign.campaign_name) || (individualCampaign.campaign) || (individualCampaign.utm_campaign)}</b></h2>
        <h3>Adset: <b>{(individualCampaign.media_buy_name) || (individualCampaign.ad_group) || (individualCampaign.ad_squad_name) || (individualCampaign.utm_medium)}</b></h3>
        <h3>Creative: <b>{(individualCampaign.ad_name) || (individualCampaign.image_name) || (individualCampaign.creative_name) || (individualCampaign.utm_content)}</b></h3>
        <h3>Spend: $<b>{(individualCampaign.spend) || (individualCampaign.cost)}</b></h3>
        <h3>Impressions: <b>{(individualCampaign.impressions)}</b></h3>
        <h3>Clicks: <b>{(individualCampaign.clicks) || (individualCampaign.post_clicks)}</b></h3>
        <h3>Results: <b>{(individualCampaign.results)}</b></h3>
    </div>
  )
}

export default GeneralCard