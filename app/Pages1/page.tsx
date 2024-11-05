import React from 'react'
import CommunityGuidelines from '../components/guidelines'
import GameplayFeatures from '../components/GameplayFeature'
import Testimonials from '../components/Testimonials'
import UpcomingTournaments from '../components/upcoming'
import FAQ from '../components/Faq'
import CommunityOverview from '../components/CommunityOverview'

const page = () => {
  return (
    <div>
     <CommunityGuidelines/>
     <GameplayFeatures/>
     <Testimonials/>
     <UpcomingTournaments/>
     <CommunityOverview/>
     <FAQ/>

    </div>
  )
}

export default page
