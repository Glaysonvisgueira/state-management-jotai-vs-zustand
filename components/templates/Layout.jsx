import styles from "@/styles/Layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className={styles.contentBody}>
      <div className={styles.layoutTemplate}>
        <Link href="/">HOME</Link>
        <Link href="/page-one">PAGINA 1</Link>
        <Link href="/page-two">PAGINA 2</Link>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
