import React from 'react'
import Hero from './components/hero'

import FeatureCards from './components/feature'
import Testimonials from './components/Testimonials'
import GameplayFeatures from './components/GameplayFeature'
import FAQ from './components/Faq'
import UpcomingTournaments from './components/upcoming'
import AboutSection from './about/page'

const page = () => {
  return (
    <div>
      
     
      <Hero/>
      <FeatureCards/>
      <Testimonials/>
      <GameplayFeatures/>
      <FAQ/>
      <UpcomingTournaments/>
      <AboutSection/>
    </div>
  )
}

export default page
