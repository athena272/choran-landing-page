import { FiXSquare } from "react-icons/fi";
import styles from './ErrorModal.module.scss'
import Button from '../Button';

type ModalProps = {
    closeModal: () => void;
};

export default function ({ closeModal }: ModalProps) {
    return (
        <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.modalContainer}>
                <FiXSquare />
                <p>Não foi possível enviar no momento, tente novamente mais tarde.</p>
                <div className={styles.okButtonContainer}>
                    <Button title="fechar" onClick={closeModal} />
                </div>
            </div>
        </div>
    );
}