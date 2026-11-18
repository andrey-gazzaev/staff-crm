import styles from './heading.module.css';

/** Page title and the sentence under it. */
export function Heading({
  title,
  lede,
}: {
  /** Primary title. */
  readonly title: string;

  /** Supporting sentence. Empty when the page has only a title. */
  readonly lede?: string;
}) {
  return (
    <header className={styles.heading}>
      <h1 className={styles.title}>{title}</h1>

      {lede ? <p className={styles.lede}>{lede}</p> : null}
    </header>
  );
}
