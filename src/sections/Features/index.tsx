import { MdTrendingUp, MdPersonAdd, MdAttachMoney, MdLockOpen } from 'react-icons/md';
import styles from './Features.module.scss';

export default function Features() {
    return (
        <div className={styles.container} id='features'>
            <h2>O que a Choran entrega</h2>
            <p>
                Se você está investindo e não está vendo retorno, não é um problema do digital. <strong>É um problema de estratégia</strong>.
            </p>

            <div className={styles.features}>
                <div className={styles.feature}>
                    <MdTrendingUp className={styles.icon} size={72} />
                    <h3>Crescimento Escalável</h3>
                    <p>
                        Escalamos empresas para múltiplos 5 dígitos/mês com previsibilidade.
                    </p>
                </div>
                <div className={styles.feature}>
                    <MdPersonAdd className={styles.icon} size={72} />
                    <h3>Aquisição Otimizada</h3>
                    <p>
                        Reduzimos o custo de aquisição em até X% enquanto aumentamos as conversões.
                    </p>
                </div>
                <div className={styles.feature}>
                    <MdAttachMoney className={styles.icon} size={72} />
                    <h3>Maximização de Receitas</h3>
                    <p>
                        Multiplicamos a recorrência e o ticket médio sem aumentar seu investimento em tráfego.
                    </p>
                </div>
                <div className={styles.feature}>
                    <MdLockOpen className={styles.icon} size={72} />
                    <h3>Desbloqueio de Gargalos</h3>
                    <p>
                        Eliminamos gargalos invisíveis que bloqueiam seu crescimento.
                    </p>
                </div>
            </div>
        </div>
    );
}
