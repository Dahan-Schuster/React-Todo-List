import React from "react";
import { FiCheck } from "react-icons/fi";

import styles from "./Checkbox.module.css";

interface CheckboxProps {
  selected: boolean;
}

/**
 * Componente de checkbox
 */
const Checkbox: React.FunctionComponent<CheckboxProps> = ({ selected }) => {
  return (
    <div className={`${styles.checkbox} ${selected ? styles.selected : ""}`}>
      {selected && <FiCheck size={16} />}
    </div>
  );
};

export default Checkbox;
