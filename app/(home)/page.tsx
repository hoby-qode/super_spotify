import React, { useEffect } from 'react'
import HomeBanner from './components/homeBanner/homeBanner'
import HomeSlider from './components/HomeSlider/homeSlider'
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeSlider />
    </div>
  )
}
