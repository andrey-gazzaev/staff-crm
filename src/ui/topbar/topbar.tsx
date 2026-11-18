import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './topbar.module.css';

type Item = {
  /** Destination path. */
  readonly href: string;

  /** Visible name of the destination. */
  readonly label: string;
};

/** Rail card. The brand is supplied by the caller. */
export function Topbar({
  brand,
  items,
  selectedHref,
}: {
  /** Mark shown above the destinations. */
  readonly brand: ReactNode;

  /** Destinations, top to bottom. */
  readonly items: readonly Item[];

  /** href of the current destination. Empty when none is current. */
  readonly selectedHref: string;
}) {
  return (
    <nav className={styles.bar} aria-label="Разделы">
      <div className={styles.brand}>{brand}</div>

      <ul className={styles.list}>
        {items.map((item) => {
          const selected = item.href === selectedHref;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={selected ? `${styles.link} ${styles.selected}` : styles.link}
                aria-current={selected ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
