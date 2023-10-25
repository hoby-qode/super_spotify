import React from 'react'
import Player from '../player/player'
import { getSongs } from '@/src/query/songsQuery'

export default async function Footer() {
  const tracks = await getSongs()
  return (
    <div>
      <Player tracks={tracks} />
    </div>
  )
}
