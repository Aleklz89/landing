import React from 'react'
import styles from './Cabinet.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Cabinet() {
    return (
        <div className={styles.main}>
            <div className={styles.cvvthree}>CVV888</div>
            <div className={styles.cvv}>CVV888</div>
            <div className={styles.cvvtwo}>CVV888</div>
            <div className={styles.box}>
                <div className={styles.inner}>
                    <div className={styles.blockone}>
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            height="85"
                            width="70"
                        />
                        <div className={styles.title}>CVV888</div>
                    </div>
                    <div className={styles.blocktwo}>
                        <div className={styles.text}>Особистий кабінет</div>
                    </div>
                    <div className={styles.blockthree}>
                        <Link href='https://t.me/cvv888sales'>
                            <div className={styles.start}><p>Увійти через телеграм</p></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cabinet