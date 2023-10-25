import React from 'react'
import styles from './sliderNav.module.css'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface SidebarItemProps {
  icon: IconType
  title: string
  subtitle: string
  active?: boolean
  href: string
}

const PictoNav: React.FC<SidebarItemProps> = ({
  icon: Icon,
  title,
  subtitle,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      passHref
      className={`${styles.pictoNav} ${active ? 'active' : ''}`}
    >
      <div className={styles.pictoNav_left}>
        <div className={styles.pictoNav_left__topTitle}>{title}</div>
        <div className={styles.pictoNav_left__title}>{subtitle}</div>
      </div>
      <div className={styles.pictoNav_right}>
        <Icon size={26} />
      </div>
    </Link>
  )
}

export default PictoNav
