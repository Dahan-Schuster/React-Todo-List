import type { FunctionComponent }  from "react";

import styles from "./Header.module.css";

import logo from "../assets/Logo.svg";

/**
* Componente de cabeçalho do app
*/
const Header: FunctionComponent = () => {
	return (
		<div className={styles.header}>
			<img src={logo} className={styles.logo} />
		</div>
	);
};

export default Header;
