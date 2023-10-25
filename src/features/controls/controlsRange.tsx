'use client'
import { useFormattedTime } from '@/src/utils/utils'
import React from 'react'
import styles from './controlsRange.module.css'
const ControlsRange = ({
  currentTime,
  duration,
  onDrag,
}: {
  currentTime: number
  duration: number
  onDrag: Function
}) => {
  const formattedCurrentTime = useFormattedTime(currentTime)
  const formattedDuration = useFormattedTime(duration)
  return (
    <div className={styles.range__container}>
      <div className={styles.rangeTime}>{formattedCurrentTime}</div>
      <input
        type="range"
        min={0}
        max={duration}
        onChange={(e) => onDrag(e)}
        value={currentTime}
        className={styles.range}
      />
      <div className={styles.rangeTime}>{formattedDuration}</div>
    </div>
  )
}

export default ControlsRange
