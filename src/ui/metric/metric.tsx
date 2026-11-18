import styles from './metric.module.css';

/** One figure with its name and a second line. */
export function Metric({
  label,
  value,
  hint,
}: {
  /** Short name of the figure. */
  readonly label: string;

  /** Figure, already formatted. */
  readonly value: string;

  /** Second line. Empty when there is nothing to add. */
  readonly hint: string;
}) {
  return (
    <div className={styles.metric}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
      {hint ? <p className={styles.hint}>{hint}</p> : null}
    </div>
  );
}
