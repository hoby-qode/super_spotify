import React, { useContext } from 'react'
import { getSongs, getSongsByArtist } from '@/src/query/songsQuery'
import TrackLists from '@/src/features/track/trackLists'
import '@/styles/app.css'
import { TbCheck } from 'react-icons/tb'
import TextImage from '@/src/features/textImage/textImage'
import AlbumsLists from './components/albums/albumsLists'
import HeaderPage from './components/headerPage/headerPage'

export const revalidate = 0

export default async function Home() {
  // const tracks = await getSongs()
  const tracks = await getSongsByArtist('Agrad skaiz')

  return (
    <div className="row">
      <div className="col-md-6 mt-5 pt-5">
        <HeaderPage />
      </div>
      <div
        className="col-md-6 mt-5 scroll-custom"
        style={{ overflowY: 'auto', height: '70vh' }}
      >
        <h2>New release</h2>
        <TextImage
          picture="/posters/c13241168143671.64556d321e3c3.jpg"
          title="Test"
          subtitle="Artist"
        />

        <h2>Popular songs</h2>
        <TrackLists tracks={tracks} />

        <h2>Albums</h2>
        <AlbumsLists artists={tracks} />
      </div>
    </div>
  )
}
