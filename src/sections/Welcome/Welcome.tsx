import Image from 'next/image';
import Button from '@/components/Button';
import scrollTo from '@/utils/scrollTo';
import BannerWelcome from './images/bannerWelcome.svg'
import styles from './Welcome.module.scss'

export default function Welcome() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Melhor agência de marketing do bairro</h1>
                <p>
                    Somos uma agência de performance digital, aceleramos vendas e
                    aquisição de leads para grandes marcas.
                </p>
                <Button
                    title="Aumentar vendas"
                    kind="secundary"
                    onClick={() => scrollTo("contato")}
                />
            </div>
            <div className={styles.image}>
                <Image src={BannerWelcome} alt="Banner Welcome" />
            </div>
        </div>
    );
}