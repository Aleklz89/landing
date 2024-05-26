
"use client"

import React, { useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Hamburger from 'hamburger-react'

function Header() {

    const [menuVisible, setMenuVisible] = useState(false);

    const handleScroll = (anchor) => {
        anchor.preventDefault();
        const href = anchor.target.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
    return (
        <div className={styles.main}>
            <div className={styles.center}>
                <Link href="/#section0" style={{ textDecoration: 'none' }}>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        height={85}
                        width={70}
                        className={styles.img}
                    />
                </Link>
                <div className={styles.navbarone}>
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
            <div className={styles.button}>
                <Hamburger toggled={menuVisible} toggle={setMenuVisible} color="white" />
            </div>
            <div className={menuVisible ? `${styles.sidemenu} ${styles.show}` : styles.sidemenu}>
                <div className={styles.menu}>
                    <div className={styles.sidepar}>
                        <Link href="/#section1" style={{ textDecoration: 'none' }} className={styles.menuitem}>
                            <div>Переваги</div>
                        </Link>
                        <Link href="/#section2" style={{ textDecoration: 'none' }} className={styles.menuitem}>
                            <div>Для кого це</div>
                        </Link>
                        <Link href="/#section3" style={{ textDecoration: 'none' }} className={styles.menuitem}>
                            <div>Як це працює</div>
                        </Link>
                        <Link href="/#section4" style={{ textDecoration: 'none' }} className={styles.menuitem}>
                            <div>Контакти</div>
                        </Link>
                        <a href="/login" style={{ textDecoration: 'none' }} passHref>
                            <button className={styles.loginbtntwo}>Увійти</button>
                        </a>
                        <a href="/login" style={{ textDecoration: 'none' }} passHref>
                            <button className={styles.signupbtntwo}>Зареєструватися</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
