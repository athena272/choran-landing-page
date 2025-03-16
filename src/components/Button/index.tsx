import styles from './Button.module.scss'

type ButtonProps = {
    title: string,
    kind?: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset",
    [key: string]: any; // Permite propriedades adicionais
}

export default function Button({ title, kind, onClick, type, noClass, ...rest }: ButtonProps) {
    const generationClassByKind = () => {
        if (kind === "secundary") return styles.secundary;
        if (kind === "full") return styles.full;

        return styles.primary;
    };

    return (
        <button
            type={type}
            className={`${!noClass ? styles.button : null} ${generationClassByKind()}`}
            onClick={onClick}
            {...rest} // Correção: Passando propriedades adicionais corretamente
        >
            {title}
        </button>
    )
}