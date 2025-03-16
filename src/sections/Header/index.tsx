'use client'

import Image from 'next/image'
import logo from './images/choran-logo.webp'
import styles from './Header.module.scss'
import Button from '../../components/Button'
import scrollTo from '@/utils/scrollTo'
import { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleMenuClick = (section: string) => {
        scrollTo(section)
        setIsMobileMenuOpen(false)
    }

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
            
            <div className={styles.menuMobile}>
                <button 
                    className={styles.hamburgerButton}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <IoClose /> : <IoMenu size={40} />}
                </button>

                <nav className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.active : ''}`}>
                    <button 
                        className={styles.closeButton}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <IoClose />
                    </button>
                    <Button title='PUV' onClick={() => handleMenuClick('welcome')} noClass={true} />
                    <Button title='Formulário' onClick={() => handleMenuClick("contact")} noClass={true} />
                    <Button title='Solução' onClick={() => handleMenuClick("features")} noClass={true} />
                    <Button title="Fale conosco" onClick={() => handleMenuClick("contact")} noClass={true} />
                </nav>
            </div>
        </header>
    )
}