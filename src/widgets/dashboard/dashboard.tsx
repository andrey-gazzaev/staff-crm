import { KpiStrip } from '@/feature/kpi-strip/kpi-strip';
import { ProgressChart } from '@/feature/progress-chart/progress-chart';
import { TaskTable } from '@/feature/task-table/task-table';
import { WorkloadChart } from '@/feature/workload-chart/workload-chart';
import { Heading } from '@/ui/heading/heading';
import styles from './dashboard.module.css';

/** Overview: figures, charts, and the task queue. */
export function Dashboard() {
  return (
    <div className={styles.board}>
      <Heading
        title="Обзор смены"
        lede="Как команда закрывает план и какие задачи ещё в работе."
      />

      <KpiStrip />

      <div className={styles.charts}>
        <ProgressChart />
        <WorkloadChart />
      </div>

      <TaskTable />
    </div>
  );
}
