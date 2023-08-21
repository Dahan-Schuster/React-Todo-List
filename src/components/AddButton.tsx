import React from "react";
import { FiPlusCircle } from "react-icons/fi";

import styles from "./AddButton.module.css";

interface AddButtonProps {
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
* Botão usado em situações de cadastro/adição de itens
*/
const AddButton: React.FunctionComponent<AddButtonProps> = ({ label, onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			<span>{label}</span>
			<FiPlusCircle size={16}/>
		</button>
	);
};

export default AddButton;
