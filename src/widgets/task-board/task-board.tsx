import { TaskTable } from '@/feature/task-table/task-table';
import { WorkloadChart } from '@/feature/workload-chart/workload-chart';
import { Heading } from '@/ui/heading/heading';
import styles from './task-board.module.css';

/** Status mix and the full task queue. */
export function TaskBoard() {
  return (
    <div className={styles.board}>
      <Heading title="Задачи" lede="Очередь по статусам и срок каждой задачи." />

      <WorkloadChart />
      <TaskTable />
    </div>
  );
}
