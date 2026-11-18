'use client';

import { useStaffData } from '@/context';
import { mapKpis } from '@/mappers';
import { Metric, Panel } from '@/ui';
import styles from './kpi-strip.module.css';

/** Four figures for the current desk. */
export function KpiStrip() {
  const snapshot = useStaffData();

  const kpis = mapKpis(snapshot);

  return (
    <section className={styles.strip}>
      {kpis.map((kpi) => (
        <Panel key={kpi.id}>
          <Metric label={kpi.label} value={kpi.value} hint={kpi.hint} />
        </Panel>
      ))}
    </section>
  );
}
