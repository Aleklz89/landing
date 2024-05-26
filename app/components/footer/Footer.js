import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (
        <div className={styles.main} id="section5">
            <div className={styles.center}>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    height="85"
                    width="70"
                    className={styles.img}
                />
                <div className={styles.navbar}>
                    <Link href="/agreement" style={{ textDecoration: 'none' }}>
                        <div className={styles.nav}>Угода користувача</div>
                    </Link>
                    <Link href="/policy" style={{ textDecoration: 'none' }}>
                        <div className={styles.nav}>Політика конфіденційності</div>
                    </Link>
                </div>
                <div className={styles.auth}>
                    <div className={styles.textone}>
                        <span className={styles.left}>Підтримка 24/7: </span>
                        <Link href="https://t.me/cvv888_support">
                            <span className={styles.rightone}> @cvv888_support</span>
                        </Link>
                    </div>
                    <div className={styles.texttwo}>
                        <span className={styles.left}>Для співпраці: </span>
                        <Link href="https://t.me/cvv888sales">
                            <span className={styles.righttwo}> @cvv888sales</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
