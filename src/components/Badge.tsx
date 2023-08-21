import React from "react";

import styles from "./Badge.module.css";

interface BadgeProps {
  text: string;
}

/**
 * Componente para mostrar um texto em formato de badge do bootstrap
 */
const Badge: React.FunctionComponent<BadgeProps> = ({ text }) => {
  return <div className={styles.badge}>{text}</div>;
};

export default Badge;
