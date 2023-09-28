import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
const Navbar = () => {
  
  return (
    
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src='/facebook.png' width={24} height={24} alt='facebook' />      
        <Image src='/instagram.png' width={24} height={24} alt='facebook' />      
        <Image src='/tiktok.png' width={24} height={24} alt='facebook' />      
        <Image src='/youtube.png' width={24} height={24} alt='facebook' />      
        </div>
      <div className={styles.logo}>BlogApp</div>
      <div className={styles.links}>
        <Link href='/' className={styles.link}>Homepage</Link>
        <Link href='/' className={styles.link}>Contacts</Link>
        <Link href='/'className={styles.link}>About</Link>
        <AuthLinks />
        </div>
    </div>
  )
}

export default Navbar