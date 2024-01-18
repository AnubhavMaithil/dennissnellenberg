"use client";
import Image from 'next/image'
import styles from './page.module.css'


import Gallery from '@/Components/Gallery'
import Landing from '@/Components/Landing'
import Description from '@/Components/Description'
import SlidingImages from '@/Components/SlidingImages'
import Contact from '@/Components/Contact'


import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  })

  return (
    <main className={styles.main}>
      <Landing />
      <Description />
      <Gallery />
      <SlidingImages />
      <Contact />
    </main>
  )
}
