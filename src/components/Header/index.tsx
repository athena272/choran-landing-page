'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from './images/choran-logo.webp'
import styles from './Header.module.scss'
import Button from '../Button'
import scrollTo from '@/utils/scrollTo'

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.logotipo}>
                <Image src={logo} alt="Logo" />
            </div>
            <nav className={styles.menu}>
                <Link href="/">PUV</Link>
                <Link href="/">Formulário</Link>
                <Link href="/">Solução</Link>
            </nav>
            <div className={styles.action}>
                <Button title="Fale conosco" onClick={() => scrollTo("contat")} />
            </div>
        </header>
    )
}