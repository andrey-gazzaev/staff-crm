import { EmployeeProgressChart } from '@/feature/employee-progress-chart/employee-progress-chart';
import { EmployeeTable } from '@/feature/employee-table/employee-table';
import { Heading } from '@/ui/heading/heading';
import styles from './staff-board.module.css';

/** People, their plan, and the open work on each of them. */
export function StaffBoard() {
  return (
    <div className={styles.board}>
      <Heading
        title="Сотрудники"
        lede="Прогресс по людям и сколько задач у каждого ещё открыто."
      />

      <EmployeeProgressChart />
      <EmployeeTable />
    </div>
  );
}
