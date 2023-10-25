import React, { useContext } from 'react'
import { getSongs } from '@/src/query/songsQuery'
import TrackLists from '@/src/features/track/trackLists'
import '@/styles/app.css'
import { TbCheck } from 'react-icons/tb'
import CardInline from '@/src/features/card/cardInline'
export default async function Musics() {
  const tracks = await getSongs()

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>89.293.201 Monthlty listeners</h3>
        <h1>
          The <br /> Weekend
        </h1>
        <div className="like-h3">
          Following <TbCheck />
        </div>
      </div>
      <div className="col-md-6">
        <h2>New release</h2>
        <CardInline
          picture="/posters/c13241168143671.64556d321e3c3.jpg"
          title="Test"
          subtitle="Artist"
        />
        <h2>Popular songs</h2>
        <TrackLists tracks={tracks} />
      </div>
    </div>
  )
}
