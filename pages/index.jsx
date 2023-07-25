import { useAtom } from "jotai";
import { counter } from "../store/bookStoreJotai";
import { useBookStore } from "../store/bookStoreZustand";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const [count, setCounter] = useAtom(counter);

  const amount = useBookStore((state) => state.amount);
  const updateAmount = useBookStore((state) => state.updateAmount);

  return (
    <div className={styles.container}>
      <h1>INDEX</h1>
      <div className={styles.card}>
        <h2>JOTAI</h2>

        <div className={styles.botoesStack}>
          <button
            className={styles.btnMenos}
            onClick={() => {
              setCounter((c) => c - 1);
            }}
          >
            -
          </button>
          <h2>{count}</h2>
          <button
            className={styles.btnMais}
            onClick={() => {
              setCounter((c) => c + 1);
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className={styles.card}>
        <h2>ZUSTAND</h2>

        <div className={styles.botoesStack}>
          <button className={styles.btnMenos} onClick={() => updateAmount(-1)}>
            -
          </button>
          <h2>{amount}</h2>
          <button className={styles.btnMais} onClick={() => updateAmount(1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
