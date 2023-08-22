import React from "react";
import { FiTrash } from "react-icons/fi";

import styles from "./DeleteButton.module.css";

interface DeleteButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Botão usado em situações de deleção de itens
 */
const DeleteButton: React.FunctionComponent<DeleteButtonProps> = ({
  onClick,
}) => {
  const [gotFirstClick, setGotFirstClick] = React.useState<boolean>(false);

	React.useEffect(() => {
		document.addEventListener('click', clearClicks)

		return () => {
			document.removeEventListener('click', clearClicks)
		}
	}, []);

	const clearClicks = React.useCallback(() => {
		setGotFirstClick(false);
	}, [])

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.stopPropagation();

      if (!gotFirstClick) {
        setGotFirstClick(true);
        return;
      }

      onClick(e);
    },
    [gotFirstClick, onClick]
  );

  return (
    <button
      className={`${styles.button} ${gotFirstClick ? styles.withOneClick : ""}`}
      onClick={handleClick}
    >
      <FiTrash size={24} />
    </button>
  );
};

export default DeleteButton;
