import React from 'react'
import styles from './Second.module.css'
import Image from 'next/image'

function Second() {
    return (
        <div className={styles.main}  id="section1">
            <div className={styles.left}>
                <div className={styles.title}>
                    <span className={styles.blueText}>Платежі на картку</span>
                    <span className={styles.whiteText}> можуть<br /> бути корисні для:</span>
                </div>
                <div className={styles.table}>
                    <div className={styles.row}>1. Оплати Google/Facebook/In-app реклами</div>
                    <div className={styles.row}>2. Оплати холдів</div>
                    <div className={styles.row}>3. Швидкого повернення холдів</div>
                    <div className={styles.row}>4. Кешбеку за оплату Google/Facebook</div>
                    <div className={styles.row}>5. Самостійного випуску карток</div>
                    <div className={styles.end}>6. Безлічі методів поповнення</div>
                </div>
            </div>
            <div className={styles.right}>
                <Image
                    src="/second.svg"
                    alt="Logo"
                    height="1000"
                    width="1100"
                    className={styles.card}
                />
                <div className={styles.blurredoval}></div>
            </div>
        </div>
    )
}

export default Second