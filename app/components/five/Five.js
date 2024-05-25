import React from 'react'
import styles from './Five.module.css'

function Five() {
    return (
        <div className={styles.main} id="section4">
            <div className={styles.box}>
                <div className={styles.title}>
                    <span className={styles.whiteText}>Наше рішення може<br /> бути</span>
                    <span className={styles.blueText}> корисним </span>
                    <span className={styles.whiteText}>для:</span>
                </div>
                <div className={styles.holder}>
                    <div className={styles.table}>
                        <div className={styles.row}>1.Соло-арбітражників</div>
                        <div className={styles.row}>2.Арбітражних команд та агенцій</div>
                        <div className={styles.row}>3.Підприємців</div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.row}>4.Казино та БК</div>
                        <div className={styles.row}>5.Корпоративного банкінгу</div>
                        <div className={styles.row}>6.Розрахунків у повсякденному житті</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Five