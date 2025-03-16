import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

// Tipagem para as propriedades do Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export default function Input({
    type = "text", // Valor padrão para evitar undefined
    placeholder,
    pattern,
    required,
    onBlur,
    name,
    id,
    onChange,
    value,
    className, // Permitir adicionar classes externas
    ...rest // Captura outras props do input nativo
}: InputProps) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            required={required}
            className={`${styles.input} ${className || ""}`} // Permite adicionar classes adicionais
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            {...rest} // Passa quaisquer outras propriedades adicionais
        />
    )
}