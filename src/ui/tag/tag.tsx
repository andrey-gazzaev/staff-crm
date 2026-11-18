import type { ReactNode } from 'react';
import styles from './tag.module.css';

/** Small status chip. The tone is visual, not a domain name. */
export function Tag({
  tone,
  children,
}: {
  /** Visual tone. */
  readonly tone: 'neutral' | 'progress' | 'review' | 'done';

  /** Text inside the chip. */
  readonly children: ReactNode;
}) {
  return <span className={`${styles.tag} ${styles[tone]}`}>{children}</span>;
}
