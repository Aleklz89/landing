import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (
        <div className={styles.main}>
            <div className={styles.center}>
                <Link href="/#section0" style={{ textDecoration: 'none' }}>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        height={85}
                        width={70}
                    />
                </Link>
                <div className={styles.navbar}>
                    <Link href="/#section1" style={{ textDecoration: 'none' }}>
                        <div className={styles.nav}>Переваги</div>
                    </Link>
                    <Link href="/#section2" style={{ textDecoration: 'none' }}>
                        <div className={styles.nav}>Для кого це</div>
                    </Link>
                    <Link href="/#section3" style={{ textDecoration: 'none' }}>
                        <div className={styles.nav}>Як працює</div>
                    </Link>
                    <Link href="/#section4" style={{ textDecoration: 'none' }}>
                        <div className={styles.nav}>Контакти</div>
                    </Link>
                </div>
                <div className={styles.auth}>
                    <Link href="/login" style={{ textDecoration: 'none' }} className={styles.reg}>
                        <div>Зареєструватись</div>
                    </Link>
                    <Link href="/login" style={{ textDecoration: 'none' }} className={styles.log}>
                        <div>Увійти</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
