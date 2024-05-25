import React from 'react'
import styles from './First.module.css'
import Image from 'next/image'
import Link from 'next/link'

function First() {
  return (
    <div className={styles.main} id="section0">
      <div className={styles.cvvthree}>CVV888</div>
      <div className={styles.cvv}>CVV888</div>
      <div className={styles.cvvtwo}>CVV888</div>
      <div className={styles.cardbox}>
        <Image
          src="/card.svg"
          alt="Logo"
          height="500"
          width="1000"
          className={styles.card}
        />
      </div>
      <div className={styles.blob}></div>
      <div className={styles.blobtwo}></div>
      <div className={styles.textbox}>
        <div className={styles.text}>
          <div className={styles.first}>Оплата будь-яких сервісів</div>
          <div className={styles.second}>Здійснюємо оплату на банківські картки<br />
            Ми працюємо з такими системами: VISA, Master Card<br />
            Лідируючий український сервіс із надання віртуальних карток</div>
          <div className={styles.third}>
            <Link href='https://t.me/cvv888sales'>
              <div className={styles.start}><p>Почати користування</p></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default First
