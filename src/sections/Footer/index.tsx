import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import scrollTo from '@/utils/scrollTo'
import styles from './Footer.module.scss'
import Logo from './images/choran-logo.webp'
import IconInstagram from './images/icon-instagram.svg'
import IconLinkedin from './images/icon-linkedin.svg'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={`${styles.column} ${styles.columnPrincipal}`}>
                <Image src={Logo} alt="Logo" />
                <h1 className={styles.title}>(11) 5242-7599</h1>
                <p>comercial@choranmidias.com.br</p>
            </div>
            <div className={styles.column}>
                <h1>MENU</h1>
                <p>
                    <Button title='PUV' onClick={() => scrollTo('welcome')} noClass={true} />
                </p>
                <p>
                    <Button title='Formulário' onClick={() => scrollTo("contact")} noClass={true} />
                </p>
                <p>
                    <Button title='Solução' onClick={() => scrollTo("features")} noClass={true} />
                </p>
            </div>
            <div className={styles.column}>
                <h1>CONTEÚDO</h1>
                <p>E-books</p>
                <p>Fórmulas prontas</p>
            </div>
            <div className={`${styles.column}`}>
                <h1>SOCIAL</h1>
                <div className={styles.icons}>
                    <Link href="https://www.instagram.com/choranmidias/" target='_blank'>
                        <Image src={IconInstagram} alt="Icon" className={styles.icon} />
                    </Link>
                    <Link href="https://www.linkedin.com/company/choran-midias/" target='_blank'>
                        <Image src={IconLinkedin} alt="Icon" className={styles.icon} />
                    </Link>
                </div>
            </div>
            <div className={styles.allRightReserved}>
                © 2024 Choran Mídias Digitais. Todos os direitos reservados.
            </div>
        </footer>
    );
}