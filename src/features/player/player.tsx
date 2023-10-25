'use client'
import Controls from '@/src/features/controls/controls'
import Volume from '@/src/features/Volume/Volume'
import styles from './player.module.css'
import { SyntheticEvent, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { currentlyPlayingTrackState } from '@/src/atoms/player.atom'
import TextImage from '../textImage/textImage'

const Player = ({ tracks }: { tracks: any }) => {
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [volume, setVolume] = useState(() => {
    if (typeof window !== 'undefined') {
      const volumeLocalStorage = localStorage.getItem('volume')
      return volumeLocalStorage || 1.0
    }
    return 1.0
  })
  const playingTrack = useRecoilValue(currentlyPlayingTrackState)

  const handleMuted = () => {
    if (!isMuted) {
      setIsMuted(true)
      setVolume(0)
    } else {
      setIsMuted(false)
    }
  }
  const handleVolume = (e: SyntheticEvent<EventTarget>) => {
    setVolume(parseFloat((e.target as HTMLInputElement).value))
    localStorage.setItem('volume', volume)
  }

  return (
    <section className={`${styles.player}`}>
      <div className="container">
        <div className="row align-items-center">
          <div
            className={`${styles.player_infos} col-lg-3 col-md-4 d-flex pl-0`}
          >
            <TextImage
              picture={playingTrack.poster}
              title={playingTrack.title}
              subtitle={playingTrack.artist}
            />
          </div>
          <div className={`${styles.player_controls} col-lg-6 col-md-5`}>
            <Controls isMuted={isMuted} volume={volume} tracks={tracks} />
          </div>
          <div className={`${styles.player_volume} col-md-3`}>
            <Volume
              handleMuted={handleMuted}
              handleVolume={handleVolume}
              volume={volume}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Player
