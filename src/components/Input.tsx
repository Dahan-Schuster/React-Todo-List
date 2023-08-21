import React from "react";

import styles from "./Input.module.css";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean;
}

/**
 * Componente para inserção de texto
 */
const Input: React.FunctionComponent<InputProps> = ({
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.input} ${error ? styles.errored : ""}`}
    />
  );
};

export default Input;
