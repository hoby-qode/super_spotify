'use client'
import React, { MouseEventHandler } from 'react'
import styles from './controlsIcon.module.css'

const ControlsIcon = ({
  onClick,
  children,
  className = undefined,
  ...props
}: {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  className: String | undefined
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.controlsButton} ${
        className == 'controlsButtonPlay'
          ? styles.controlsButtonPlay
          : className
      }`}
      {...props}
    >
      {children}
    </button>
  )
}

export default ControlsIcon
