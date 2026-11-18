'use client';

import { usePathname } from 'next/navigation';
import { Topbar } from '@/ui/topbar/topbar';
import styles from './app-nav.module.css';

const items = [
  { href: '/', label: 'Обзор' },
  { href: '/employees', label: 'Сотрудники' },
  { href: '/tasks', label: 'Задачи' },
] as const;

/** Rail with the product name and the three desks. */
export function AppNav() {
  const pathname = usePathname();

  const selectedHref = pathname.startsWith('/employees')
    ? '/employees'
    : pathname.startsWith('/tasks')
      ? '/tasks'
      : '/';

  return (
    <Topbar
      selectedHref={selectedHref}
      items={items}
      brand={
        <div>
          <p className={styles.mark}>Смена</p>
          <p className={styles.kicker}>сотрудники и задачи</p>
        </div>
      }
    />
  );
}
