import styles from './shell.module.css';

/** Two-column chrome for the rail and the page. */
export function Shell({ children }: { readonly children: React.ReactNode }) {
  return <div className={styles.shell}>{children}</div>;
}
