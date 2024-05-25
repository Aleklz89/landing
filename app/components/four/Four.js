import React from 'react'
import styles from './Four.module.css'
import Image from 'next/image'

function Four() {
    return (
        <div className={styles.main} id="section3">
            <div className={styles.box}>
                <div className={styles.sphereone}></div>
                <Image
                    src="/cube.svg"
                    alt="Logo"
                    height="2560"
                    width="1117"
                    className={styles.cube}
                />
                <div className={styles.spheretwo}></div>
            </div>
            <div className={styles.table}>
                <div className={styles.card}>
                    <div className={styles.top}>
                        <div className={styles.ellipse}></div>
                        1/5
                    </div>
                    <div className={styles.text}>
                        Зареєструйтеся в системі та отримайте
                        доступ до особистого кабінету.
                        Реєстрація займе не більше 5 хвилин
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.top}>
                        <div className={styles.ellipse}></div>
                        2/5
                    </div>
                    <div className={styles.text}>
                        Отримайте необхідні реквізити
                        для поповнення балансу.
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.top}>
                        <div className={styles.ellipse}></div>
                        3/5
                    </div>
                    <div className={styles.text}>
                        Поповнюйте баланс зручним
                        для вас способом
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.top}>
                        <div className={styles.ellipse}></div>
                        4/5
                    </div>
                    <div className={styles.text}>
                        Завантажте реєстр виплат, а також
                        підтвердьте переказ коштів
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.top}>
                        <div className={styles.ellipse}></div>
                        5/5
                    </div>
                    <div className={styles.text}>
                        CVV888 перераховуватиме кошти на картки
                        ваших клієнтів, а ви матимете доступ
                        до історії всіх платежів
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Four