import Image from "next/image";
import styles from './Features.module.scss'
import Icon from './images/icon.svg'

export default function Features() {
    return (
        <div className={styles.container}>
            <h1>Neste bairro, não há agência melhor. Garantimos.</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className={styles.features}>
                <div className={styles.feature}>
                    <Image src={Icon} alt="Icon" className={styles.icon} />
                    <h1>Digital Strategy</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                </div>
                <div className={styles.feature}>
                    <Image src={Icon} alt="Icon" className={styles.icon} />
                    <h1>Digital Strategy</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                </div>
                <div className={styles.feature}>
                    <Image src={Icon} alt="Icon" className={styles.icon} />
                    <h1>Digital Strategy</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                </div>
                <div className={styles.feature}>
                    <Image src={Icon} alt="Icon" className={styles.icon} />
                    <h1>Digital Strategy</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                </div>
            </div>
        </div>
    );
}