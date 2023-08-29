import React from 'react'

function GeneralCard({individualCampaign, googleAnalyticsData}) {

let result

  googleAnalyticsData.map((gaData) => {

    if (((individualCampaign.campaign_name) || (individualCampaign.campaign)) === (gaData.utm_campaign) 
    && (gaData.utm_medium).includes((individualCampaign.media_buy_name) || (individualCampaign.ad_group) || (individualCampaign.ad_squad_name.replace(" Squad", ""))) 
    && ((individualCampaign.ad_name) || (individualCampaign.image_name) || (individualCampaign.creative_name)).includes((gaData.utm_content).split("")[0])
    ) {
      
      result = gaData.results
      
    }
    return result
  })

  return (
    <div className='campaignCard'>
        <h2>Campaign: <b>{(individualCampaign.campaign_name) || (individualCampaign.campaign)}</b></h2>
        <h3>Adset: <b>{(individualCampaign.media_buy_name) || (individualCampaign.ad_group) || (individualCampaign.ad_squad_name)}</b></h3>
        <h3>Creative: <b>{(individualCampaign.ad_name) || (individualCampaign.image_name) || (individualCampaign.creative_name)}</b></h3>
        <h3>Spend: $<b>{(individualCampaign.spend) || (individualCampaign.cost)}</b></h3>
        <h3>Impressions: <b>{(individualCampaign.impressions)}</b></h3>
        <h3>Clicks: <b>{(individualCampaign.clicks) || (individualCampaign.post_clicks)}</b></h3>
        <h3>Results: <b>{result}</b></h3>
    </div>
  )
}

export default GeneralCard