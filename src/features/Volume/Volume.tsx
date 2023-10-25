'use client'
import React from 'react'
import styles from './Volume.module.css'
import { TbVolume } from 'react-icons/tb'
const Volume = (props: {
  handleMuted: Function
  handleVolume: Function
  volume: number
}) => {
  return (
    <div className="d-flex gap-15 h-100 align-items-center">
      <button
        className={styles.controlsButton}
        onClick={() => props.handleMuted()}
      >
        <TbVolume />
      </button>
      <input
        className={styles.controlsVolume}
        type="range"
        min={0}
        max={1.0}
        step={0.01}
        value={props.volume}
        onChange={(e) => {
          props.handleVolume(e)
        }}
      />
    </div>
  )
}

export default Volume
