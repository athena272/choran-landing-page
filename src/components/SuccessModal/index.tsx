import { FiCheckCircle } from "react-icons/fi";
import styles from './SuccessModal.module.scss'
import Button from "../Button";

type ModalProps = {
    closeModal: () => void;
};

export default function SuccessModal({ closeModal }: ModalProps) {
    return (
        <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.modalContainer}>
                <FiCheckCircle />
                <p>Email enviado com sucesso!</p>
                <div className={styles.okButtonContainer}>
                    <Button title="fechar" onClick={closeModal} />
                </div>
            </div>
        </div>
    );
}