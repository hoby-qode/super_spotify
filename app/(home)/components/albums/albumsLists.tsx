'use client'
import React, { useEffect, useState } from 'react'
import Album from './album'
import Loading from '@/app/loading'
import { artistsState } from '@/src/atoms/player.atom'
import { useRecoilValue } from 'recoil'

const AlbumsLists = ({ artists }: { artists: any }) => {
  const [isLoading, setIsLoading] = useState(true)
  //   const allSongs = useRecoilValue(allSongsState)
  //   const artists = useRecoilValue(artistsState)
  useEffect(() => {
    setIsLoading(false)
  }, [isLoading, artists])
  return (
    <div className="allSongs row">
      {artists.map((artist: any) => {
        return (
          <Album
            title="test"
            desc="lorem ipsum set doler ispom set doler ipsum doler"
            picture="/images/pexels-mati-mango-5952651.jpg"
            link={`/artistes`}
            key={artist}
          />
        )
      })}
    </div>
  )
}

export default AlbumsLists
