import styles from './section-title.module.css';

/** Title of one panel, with an optional note. */
export function SectionTitle({
  title,
  note,
}: {
  /** Panel title. */
  readonly title: string;

  /** Short line under the title. Empty when the title is enough. */
  readonly note?: string;
}) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>

      {note ? <p className={styles.note}>{note}</p> : null}
    </header>
  );
}
