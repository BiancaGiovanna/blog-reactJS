import styles from "./Footer.module.css";

export default function Footer() {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <h3>Escreva sobre suas duvidas</h3>
      <p>Blog React &copy; {date.getFullYear()}</p>
    </footer>
  );
}
