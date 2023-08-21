import Header from "./components/Header";
import "./global.css";

import styles from "./App.module.css";
import CreateTodo from "./containers/CreateTodo";
import TodosQuantity from "./containers/TodosQuantity";

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <section className={styles.inputSection}>
        <CreateTodo />
      </section>
      <section className={styles.listSection}>
        <TodosQuantity />
      </section>
    </div>
  );
}

export default App;
