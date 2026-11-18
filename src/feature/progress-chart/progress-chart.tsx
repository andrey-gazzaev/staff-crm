'use client';

import { useStaffData } from '@/context';
import { mapProgressPoint } from '@/mappers';
import { Panel, SectionTitle, TrendChart } from '@/ui';
import styles from './progress-chart.module.css';

/** Weekly average of the team plan. */
export function ProgressChart() {
  const { progress } = useStaffData();

  const points = progress.map(mapProgressPoint);

  return (
    <Panel>
      <div className={styles.stack}>
        <SectionTitle title="Прогресс по неделям" note="Среднее выполнение плана" />
        <TrendChart points={points} unit="%" series="План" />
      </div>
    </Panel>
  );
}
