'use client'

import Image from 'next/image'
import logo from './images/choran-logo.webp'
import styles from './Header.module.scss'
import Button from '../../components/Button'
import scrollTo from '@/utils/scrollTo'

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.logotipo}>
                <Image src={logo} alt="Logo" />
            </div>
            <nav className={styles.menu}>
                <Button title='PUV' onClick={() => scrollTo('welcome')} noClass={true} />
                <Button title='Formulário' onClick={() => scrollTo("contact")} noClass={true} />
                <Button title='Solução' onClick={() => scrollTo("features")} noClass={true} />
            </nav>
            <div className={styles.action}>
                <Button title="Fale conosco" onClick={() => scrollTo("contact")} />
            </div>
        </header>
    )
}