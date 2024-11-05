import React from 'react'
import CommunityOverview from '../components/CommunityOverview'
import CommunityEvents from '../components/events'
import CommunityTestimonials from '../components/CommunityTest'

const pages = () => {
  return (
    <div>
      <CommunityOverview/>
      <CommunityEvents/>
      <CommunityTestimonials/>


    </div>
  )
}

export default pages
