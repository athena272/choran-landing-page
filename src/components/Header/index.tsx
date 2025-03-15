'use client'

import logo from './images/choran-logo.webp'
import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <Image src={logo} alt='Agência' />
            </div>
            <nav className={styles.menu}>
                <ul>
                    <li>
                        <Link href='/'>PUV</Link>
                    </li>
                    <li>
                        <Link href='/'>Formulário</Link>
                    </li>
                    <li>
                        <Link href='/'>Solução</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.action}>
                <button>Fale conosco</button>
            </div>
        </header>
    )
}