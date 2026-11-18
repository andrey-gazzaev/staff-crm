import styles from './page.module.css';

/** Main column for one page. */
export function Page({ children }: { readonly children: React.ReactNode }) {
  return <div className={styles.page}>{children}</div>;
}
