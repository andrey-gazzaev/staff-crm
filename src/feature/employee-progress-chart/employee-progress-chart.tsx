'use client';

import { useStaffData } from '@/context';
import { mapEmployeeBar } from '@/mappers';
import { ColumnChart, Panel, SectionTitle } from '@/ui';
import styles from './employee-progress-chart.module.css';

/** Plan completion for each person. */
export function EmployeeProgressChart() {
  const { employees } = useStaffData();

  const points = employees.map(mapEmployeeBar);

  return (
    <Panel>
      <div className={styles.stack}>
        <SectionTitle title="План по людям" note="Доля текущего плана, уже закрытая" />
        <ColumnChart points={points} unit="%" series="План" orientation="horizontal" max={100} />
      </div>
    </Panel>
  );
}
