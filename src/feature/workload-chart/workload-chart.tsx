'use client';

import { useStaffData } from '@/context';
import { mapStatusCounts } from '@/mappers';
import { ColumnChart, Panel, SectionTitle } from '@/ui';
import styles from './workload-chart.module.css';

/** How the queue is split across statuses. */
export function WorkloadChart() {
  const { tasks } = useStaffData();

  const points = mapStatusCounts(tasks);

  return (
    <Panel>
      <div className={styles.stack}>
        <SectionTitle title="Задачи по статусам" note="Сколько штук в каждом шаге" />
        <ColumnChart points={points} unit="" series="Задачи" orientation="horizontal" />
      </div>
    </Panel>
  );
}
