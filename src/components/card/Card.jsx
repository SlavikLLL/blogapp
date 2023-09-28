import React from 'react'
import styles from './card.module.css'
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Item from '../item/Item'
const Card = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
       <Item />
       <Item />
       <Item />
       <Item />
      </div>
        <Pagination />
    </div>
  )
}

export default Card