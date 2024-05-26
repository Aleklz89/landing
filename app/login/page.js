import React from 'react'
import styles from './Login.module.css'
import Header from '../components/Header/Header'
import Cabinet from '../components/cabinet/Cabinet'
import '../globals.css'


function page() {
  return (
    <div>
        <div className={styles.top}></div>
        <Header />
        <Cabinet />
    </div>
  )
}

export default page