'use client';

import { useStaffData } from '@/context';
import { mapEmployeeRow } from '@/mappers';
import { DataTable, Meter, Panel, SectionTitle } from '@/ui';
import styles from './employee-table.module.css';

const columns = [
  { key: 'name', label: 'Имя' },
  { key: 'role', label: 'Роль' },
  { key: 'progress', label: 'Прогресс' },
  { key: 'openTasks', label: 'Открытые' },
] as const;

/** People on the desk and how much of the plan each one has done. */
export function EmployeeTable() {
  const { employees, tasks } = useStaffData();

  const rows = employees.map((employee) => {
    const row = mapEmployeeRow(employee, tasks);

    return {
      id: row.id,
      cells: {
        name: row.name,
        role: row.role,
        progress: <Meter value={row.progressValue} label={row.progress} />,
        openTasks: row.openTasks,
      },
    };
  });

  return (
    <Panel>
      <div className={styles.stack}>
        <SectionTitle title="Состав" note="Открытые задачи — всё, что ещё не сдано" />
        <DataTable columns={columns} rows={rows} />
      </div>
    </Panel>
  );
}
