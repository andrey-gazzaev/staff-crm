import styles from './panel.module.css';

/** Bordered section of a page. */
export function Panel({ children }: { readonly children: React.ReactNode }) {
  return <section className={styles.panel}>{children}</section>;
}
