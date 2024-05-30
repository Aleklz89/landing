import React from 'react'
import styles from './Second.module.css'
import Image from 'next/image'

function Second() {
    return (
        <div className={styles.main}  id="section1">
            <div className={styles.left}>
                <div className={styles.title}>blueText
                    <span className={styles.whiteText}>Чому вартно обрати нас?</span>
                </div>
                <div className={styles.table}>
                    <div className={styles.row}>1. Швидкий та приємний саппорт</div>
                    <div className={styles.row}>2. Найнижчий відсоток поповнення</div>
                    <div className={styles.row}>3. Досвідчена команда фінансистів</div>
                    <div className={styles.row}>4. Прозорі умови співпраці</div>
                    <div className={styles.end}>5. Жодних прихованих платежів та комісій</div>
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