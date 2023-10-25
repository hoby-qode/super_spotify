import React from 'react'
import styles from './textImage.module.css'
import Image from 'next/image'
const TextImageSmall = ({
  picture,
  title,
  subtitle,
}: {
  picture: string
  title: string
  subtitle: string
}) => {
  return (
    <div className={`row align-items-end mx-0 ${styles.card}`}>
      <div className="col-md-3 pr-2 pl-0">
        <div className="aspect-square">
          <Image
            src={picture}
            alt={title}
            width={130}
            height={130}
            priority
            quality={50}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
            className="rounded"
          />
        </div>
      </div>
      <div className="col-md-8 pl-2">
        <h3 className={`mb-0 ${styles.title}`}>{title}</h3>
        <p className={`${styles.subtitle} my-0`}>{subtitle}</p>
      </div>
    </div>
  )
}

export default TextImageSmall
