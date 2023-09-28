import React from 'react'
import styles from './item.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Item = () => {
  return (
    <div className={styles.container}>
         <div className={styles.imgContainer}>
            <Image src='/p1.jpg' fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.date}>
                <span className={styles.date}>14.08.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <h1>Lorem ipsum date morning Lorem ipsum date morningLorem ipsum date morning  </h1>
            <p className={styles.desc}>
            Lorem ipsum date morningLorem ipsum date morningLorem ipsum date morningLorem ipsum date morning
            Lorem ipsum date morningLorem ipsum date morningLorem ipsum date morning
            Lorem ipsum date morningLorem ipsum date morning
            Lorem ipsum date morning
            </p>
            <Link href='/' className={styles.link}>Read more</Link>
          </div>
    </div>
  )
}

export default Item