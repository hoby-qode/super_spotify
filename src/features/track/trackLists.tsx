'use client'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentlyPlayingTrackState, playState } from '@/src/atoms/player.atom'
import TrackItem from './trackItem'

const TrackLists = ({ tracks }: { tracks: any }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isPlay, setIsPlay] = useRecoilState(playState)
  const [playingTrack, setPlayingTrack] = useRecoilState(
    currentlyPlayingTrackState,
  )
  const handleChooseTrack = (id: number): void => {
    const filterSong = tracks.filter((track) => track.id === id)
    setPlayingTrack(filterSong[0])
    setIsPlay(!isPlay)
  }
  useEffect(() => {
    setIsLoading(false)
  }, [isLoading])
  return (
    <div className="px-4">
      {isLoading ? (
        <>Lorem ipsum dolor sit amet.</>
      ) : (
        tracks.map((item) => (
          <TrackItem
            id={item.id}
            key={item.id}
            title={item.title}
            artist={item.artist}
            duration={item.duration}
            onChooseTrack={handleChooseTrack}
            idCurrentlyPlaying={playingTrack.id}
          />
        ))
      )}
    </div>
  )
}

export default TrackLists
