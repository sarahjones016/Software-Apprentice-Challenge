import React from 'react'

function GoogleAnalyticsCard({googleAnalyticsCampaign}) {
  return (
    <div className='campaignCard'>
        <h2>Campaign: <b>{googleAnalyticsCampaign.utm_campaign}</b></h2>
        <h3>Adset: <b>{googleAnalyticsCampaign.utm_medium}</b></h3>
        <h3>Creative: <b>{googleAnalyticsCampaign.utm_content}</b></h3>
        <h3>Results: <b>{googleAnalyticsCampaign.results}</b></h3>
    </div>
  )
}

export default GoogleAnalyticsCard