'use client'

import logo from './images/agencia.webp'
import styles from './Header.module.scss'
import Image from 'next/image'

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <Image src={logo} alt='Agência' />
            </div>
            <div></div>
            <div></div>
        </header>
    )
}