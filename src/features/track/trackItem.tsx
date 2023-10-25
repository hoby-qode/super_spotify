'use client'
import { useFormattedTime } from '@/src/utils/utils'
import Link from 'next/link'
import React from 'react'
import styles from './track.module.css'
import Wishlist from '@/components/ui/wishlist'
import { PiWaveformBold } from 'react-icons/pi'
const TrackItem = ({
  id,
  title,
  artist,
  duration,
  onChooseTrack,
  idCurrentlyPlaying,
}: {
  id: number
  title: string
  artist: string
  duration: number
  onChooseTrack: Function
  idCurrentlyPlaying: number
}) => {
  return (
    <Link
      href="#"
      className={`${styles.trackItem} ${
        idCurrentlyPlaying === id ? styles.trackItem__active : ''
      } row align-items-center`}
    >
      <div className="col-md-4">
        <span
          className={`${styles.trackItem__title} bold`}
          onClick={() => onChooseTrack(id)}
        >
          {title}
        </span>
      </div>
      <div className="col-md-2 text-center">
        <span className={styles.trackItem__analyzer}>
          <PiWaveformBold />
        </span>
      </div>
      <div className="col-md-3">
        <span className={`${styles.trackItem__artist} light`}>{artist}</span>
      </div>
      <div className="col-md-2 text-center">
        <span className="thin">{useFormattedTime(duration)}</span>
      </div>
      <div className="col-md-1 text-center">
        <Wishlist id={id} />
      </div>
    </Link>
  )
}

export default TrackItem
