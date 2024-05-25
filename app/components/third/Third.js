import React from 'react'
import styles from './Third.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Third() {
    return (
        <div className={styles.main} id="section2">
            <div className={styles.outer}>
                <div className={styles.text}>
                    <div className={styles.left}>
                        <span className={styles.white}>Чому варто</span><br />
                        <span className={styles.blue}>обрати</span>
                        <span className={styles.white}> CVV888?</span>
                    </div>
                    <div className={styles.right}>
                        Ми пропонуємо високоякісні послуги, орієнтовані
                        на ваші потреби, за конкурентними цінами. Наша команда досвідчених
                        професіоналів використовує сучасні технології для забезпечення
                        ефективності та надійності. Ми швидко адаптуємося до змін і надаємо
                        індивідуальні рішення для ваших .
                    </div>
                </div>
            </div>
            <div className={styles.picblock}>
                <div className={styles.slotone}>
                    <div className={styles.imgblock}>
                        <Image
                            src="/guy.svg"
                            alt="Logo"
                            height="300"
                            width="340"
                            className={styles.img}
                        />
                        Лаконічний кабінет
                    </div>
                </div>
                <div className={styles.slottwo}>
                    <div className={styles.imgblocktwo}>
                        <Image
                            src="/money.svg"
                            alt="Logo"
                            height="345"
                            width="345"
                            className={styles.img}
                        />
                        Швидке поповнення
                    </div>
                </div>
                <div className={styles.slotthree}>
                    <div className={styles.imgblock}>
                        <Image
                            src="/head.svg"
                            alt="Logo"
                            height="268"
                            width="268"
                            className={styles.imgthree}
                        />
                        Цілодобовий сапорт
                    </div>
                </div>
            </div>
            <Link href='https://t.me/cvv888sales' style={{ textDecoration: 'none' }}>
                <div className={styles.button}>
                    <div className={styles.reg}>Почати користування</div>
                </div>
            </Link>
        </div>
    )
}

export default Third