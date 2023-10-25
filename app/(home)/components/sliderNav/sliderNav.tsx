'use client'
import React, { useMemo } from 'react'
import PictoNav from './pictoNav'
import { BiSearch } from 'react-icons/bi'
import { usePathname } from 'next/navigation'
import { PiWaveformBold } from 'react-icons/pi'

const SliderNav = () => {
  const pathname = usePathname()
  const routes = useMemo(
    () => [
      {
        icon: PiWaveformBold,
        title: 'Artist',
        subtitle: 'Cette Weekend',
        active: pathname !== '/artists',
        href: '/',
      },
      {
        icon: BiSearch,
        title: 'Search',
        subtitle: 'test',
        href: '/search',
        active: pathname === '/search',
      },
    ],
    [pathname],
  )
  return (
    <div className="container">
      <div className="d-flex gap-5">
        {routes.map((item) => (
          <PictoNav key={item.title} {...item} />
        ))}
      </div>
    </div>
  )
}
export default SliderNav
