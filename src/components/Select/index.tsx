import { SelectHTMLAttributes } from "react";
import styles from "./select.module.scss";

// Tipagem das opções do Select
interface Option {
    value: string;
    label: string;
}

// Tipagem das propriedades do Select
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[]; // Lista de opções obrigatória
    placeholder?: string; // Placeholder opcional
}

export default function Select({
    placeholder,
    required,
    options,
    onChange,
    id,
    name,
    value,
    className,
    ...rest
}: SelectProps) {
    return (
        <select
            id={id}
            name={name}
            className={`${styles.select} ${className || ""}`} // Permite adicionar classes adicionais
            onChange={onChange}
            required={required}
            value={value}
            {...rest} // Captura quaisquer outras propriedades adicionais
        >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
