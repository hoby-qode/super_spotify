import React from 'react'
import styles from './albums.module.css'
import Image from 'next/image'
const Album = ({
  title,
  desc,
  picture,
  link,
}: {
  title: string
  desc: string
  picture: string
  link: string
}) => {
  return (
    <div className={`${styles.albums} col-md-4`}>
      <div className={styles.albums_content}>
        <div className="cover aspect-square">
          <Image src={picture} alt={title} width={100} height={100} />
        </div>
        <div className={styles.albums_text}>
          <h3 className="mb-3 color-primary">{title}</h3>
          <div>{desc}</div>
        </div>
      </div>
    </div>
  )
}

export default Album
