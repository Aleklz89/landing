import React from 'react'
import Header from './components/Header/Header'
import './globals.css'
import styles from './page.module.css'
import First from './components/first/First'
import Second from './components/second/Second'
import Third from './components/third/Third'
import Four from './components/four/Four'
import Five from './components/five/Five'
import Footer from './components/footer/Footer'


function page() {
  return (
    <div className={styles.main}>
      <Header />
      <First />
      <Second />
      <Third />
      <Four />
      <Five />
      <Footer />
    </div>
  )
}

export default page