import styles from './meter.module.css';

/** Horizontal fill from 0 to 100, with a text label. */
export function Meter({
  value,
  label,
}: {
  /** Fill from 0 to 100. */
  readonly value: number;

  /** Text beside the bar, such as "86%". */
  readonly label: string;
}) {
  const width = Math.min(100, Math.max(0, value));

  return (
    <span className={styles.meter}>
      <span className={styles.track} aria-hidden="true">
        <span className={styles.bar} style={{ width: `${width}%` }} />
      </span>
      <span className={styles.label}>{label}</span>
    </span>
  );
}
