import React from "react";
import { FiTrash } from "react-icons/fi";

import styles from "./DeleteButton.module.css";

interface DeleteButtonProps {
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
* Botão usado em situações de deleção de itens
*/
const DeleteButton: React.FunctionComponent<DeleteButtonProps> = ({ onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			<FiTrash size={24} />
		</button>
	);
};

export default DeleteButton;

