import Header from "./components/Header";
import "./global.css";

import styles from "./App.module.css";
import CreateTodo from "./containers/CreateTodo";

function App() {

  return (
    <div className={styles.body}>
      <Header />
			<div className={styles.mainSection}>
				<CreateTodo />
			</div>
    </div>
  );
}

export default App;
