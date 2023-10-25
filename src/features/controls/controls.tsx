'use client'
import React, { useState, SyntheticEvent, useEffect, useRef } from 'react'
import { useRandomintFrominterval, useFormattedTime } from '@/src/utils/utils'
import { currentlyPlayingTrackState, playState } from '@/src/atoms/player.atom'
import { useRecoilState, useRecoilValue } from 'recoil'

import styles from './controls.module.css'
import {
  TbPlayerSkipBack,
  TbPlayerSkipForward,
  TbPlayerPlay,
  TbArrowsShuffle,
  TbReload,
  TbPlayerPause,
} from 'react-icons/tb'
import ControlsIcon from './controlsIcon'
import ControlsRange from './controlsRange'

const Controls = (props: { isMuted: Boolean; volume: number; tracks: any }) => {
  const ref = useRef<HTMLAudioElement | null>(null)
  const [isPlay, setIsPlay] = useRecoilState<boolean>(playState)
  const [timeSongInfos, setTimeSongInfos] = useState<{
    currentTime: number
    duration: number
  }>({
    currentTime: 0,
    duration: 0,
  })
  const [playingTrack, setPlayingTrack] = useRecoilState(
    currentlyPlayingTrackState,
  )

  const getTrackById = (id: number) => {
    return props.tracks[id]
  }
  /**
   * @ChangeLog (Marcel) <houbby22@gmail.com> Gestion de pause | play sur l'audio
   */
  const TogglePause = () => {
    if (isPlay) {
      setIsPlay(false)
    } else {
      setIsPlay(true)
    }
  }

  /**
   * @ChangeLog (Marcel) <houbby22@gmail.com> Gestion de next | prev sur l'audio
   */
  const HandlePrevOrNext = (args: string) => {
    let totalSong = props.tracks.length - 1
    if (args === 'prev') {
      if (playingTrack!.id == 0) {
        setPlayingTrack(getTrackById(totalSong))
      } else {
        setPlayingTrack(getTrackById(playingTrack!.id - 1))
      }
    }
    if (args === 'next') {
      if (playingTrack!.id == totalSong) {
        setPlayingTrack(getTrackById(0))
      } else {
        setPlayingTrack(getTrackById(playingTrack!.id + 1))
      }
    }
  }

  /**
   * @ChangeLog (Marcel) <houbby22@gmail.com> Gestion de randomnisation de son
   */
  const HandleRandom = () => {
    setPlayingTrack(
      getTrackById(useRandomintFrominterval(0, props.tracks.length - 1)),
    )
  }

  /**
   * @ChangeLog (Marcel) <houbby22@gmail.com> Remis à zero du piste de track
   */
  const handleReload = () => {
    if (ref.current) {
      ref.current.currentTime = 0
    }
    setTimeSongInfos({
      currentTime: 0,
      duration: 0,
    })
  }

  /**
   * @ChangeLog (Marcel) <houbby22@gmail.com> Mise à jour du piste de tracking au drag sur le range
   */
  const handleDragging = (e: SyntheticEvent<EventTarget>): void => {
    if (ref.current) {
      ref.current.currentTime = parseInt((e.target as HTMLInputElement).value)
    }
  }

  /**
   * @ChangeLog (Marcel) <houbby22@gmail.com> Mise à jour des changements sur le balise audio
   */
  const handleTimeupdate = (e: SyntheticEvent<EventTarget>): void => {
    const current = (e.target as HTMLMediaElement).currentTime
    const duration = (e.target as HTMLMediaElement).duration

    if (current == duration) {
      HandlePrevOrNext('next')
    } else {
      setTimeSongInfos({
        currentTime: current,
        duration: duration,
      })
    }
  }

  useEffect(() => {
    if (ref.current) {
      if (isPlay) {
        ref.current.play()
      } else {
        ref.current.pause()
      }
      if (props.isMuted) {
        ref.current.volume = 0
      } else {
        ref.current.volume = props.volume
      }
    }
  }, [isPlay, props.isMuted, props.volume, ref])
  return (
    <div className={styles.controls}>
      <div>
        <div className="d-flex justify-content-center gap-15 align-items-center">
          <ControlsIcon
            onClick={() => HandleRandom()}
            className="d-none d-md-flex"
          >
            <TbArrowsShuffle />
          </ControlsIcon>
          <ControlsIcon onClick={() => HandlePrevOrNext('prev')}>
            <TbPlayerSkipBack />
          </ControlsIcon>
          <ControlsIcon
            onClick={() => TogglePause()}
            className="controlsButtonPlay"
          >
            {isPlay ? <TbPlayerPlay /> : <TbPlayerPause />}
          </ControlsIcon>
          <ControlsIcon onClick={() => HandlePrevOrNext('next')}>
            <TbPlayerSkipForward />
          </ControlsIcon>
          <ControlsIcon
            onClick={() => handleReload()}
            className="d-none d-md-flex"
          >
            <TbReload />
          </ControlsIcon>
        </div>
      </div>
      {playingTrack ? (
        <audio
          src={playingTrack.src}
          controls
          ref={ref}
          onTimeUpdate={handleTimeupdate}
          onLoadedMetadata={handleTimeupdate}
          className="d-none"
        />
      ) : (
        ''
      )}
      <ControlsRange
        currentTime={timeSongInfos.currentTime}
        duration={timeSongInfos.duration}
        onDrag={handleDragging}
      />
    </div>
  )
}
export default Controls
