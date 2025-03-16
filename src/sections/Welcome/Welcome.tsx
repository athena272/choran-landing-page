import Image from 'next/image';
import Button from '@/components/Button';
import scrollTo from '@/utils/scrollTo';
import BannerWelcome from './images/bannerWelcome.svg'
import styles from './Welcome.module.scss'

export default function Welcome() {
    return (
        <div className={styles.container} id='welcome'>
            <div className={styles.text}>
                <h1>Fature <strong>R$100</strong> a <strong>R$500 mil</strong> em <strong>6 meses</strong> com uma <strong>estrutura de marketing</strong> criada para sua necessidade. <strong>Sistema de vendas
                 previsível e escalável para sua empresa nunca parar de vender!</strong>
                </h1>
                <p>
                    Seja escalando o seu negócio ou criando um negócio digital do absoluto zero.
                </p>
                <p>
                    Se o marketing da sua empresa não gera lucro real, você não tem um negócio. <strong>Tem um PROBLEMA</strong>. Nós <strong>RESOLVEMOS</strong>.
                </p>
                <Button
                    title="Aumentar vendas"
                    kind="secundary"
                    onClick={() => scrollTo("contact")}
                />
            </div>
            <div className={styles.image}>
                <Image src={BannerWelcome} alt="Banner Welcome" />
            </div>
        </div>
    );
}