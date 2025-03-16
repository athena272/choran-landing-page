import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'
import Logo from './images/choran-logo.webp'
import IconInstagram from './images/icon-instagram.svg'
import IconFacebook from './images/icon-facebook.svg'
import IconLinkedin from './images/icon-linkedin.svg'
import IconYoutube from './images/icon-youtube.svg'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={`${styles.column} ${styles.columnPrincipal}`}>
                <Image src={Logo} alt="Logo" />
                <h1 className={styles.title}>0800 800 800</h1>
                <p>comercial@agencia.com.br</p>
            </div>
            <div className={styles.column}>
                <h1>MENU</h1>
                <p>Quem somos</p>
                <p>Cases</p>
            </div>
            <div className={styles.column}>
                <h1>CONTEÚDO</h1>
                <p>E-books</p>
                <p>Fórmulas prontas</p>
            </div>
            <div className={`${styles.column} ${styles.alignRight}`}>
                <h1>SOCIAL</h1>
                <div className={styles.icons}>
                    <Link href="/">
                        <Image src={IconInstagram} alt="Icon" className={styles.icon} />
                    </Link>
                    <Link href="/">
                        <Image src={IconFacebook} alt="Icon" className={styles.icon} />
                    </Link>
                    <Link href="/">
                        <Image src={IconLinkedin} alt="Icon" className={styles.icon} />
                    </Link>
                    <Link href="/">
                        <Image src={IconYoutube} alt="Icon" className={styles.icon} />
                    </Link>
                </div>
            </div>
            <div className={styles.allRightReserved}>
                ©2022 AGENCIA - Todos os direitos reservados.
            </div>
        </footer>
    );
}