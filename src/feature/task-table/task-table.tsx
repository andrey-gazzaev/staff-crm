'use client';

import { useStaffData } from '@/context';
import { mapTaskRow } from '@/mappers';
import { DataTable, Panel, SectionTitle, Tag } from '@/ui';
import styles from './task-table.module.css';

const columns = [
  { key: 'title', label: 'Задача' },
  { key: 'assignee', label: 'Кто' },
  { key: 'status', label: 'Статус' },
  { key: 'due', label: 'Срок' },
] as const;

/** Queue with the owner, status, and due date. */
export function TaskTable() {
  const { tasks, employees } = useStaffData();

  const rows = tasks.map((task) => {
    const row = mapTaskRow(task, employees);

    return {
      id: row.id,
      cells: {
        title: row.title,
        assignee: row.assignee,
        status: <Tag tone={row.tone}>{row.status}</Tag>,
        due: row.due,
      },
    };
  });

  return (
    <Panel>
      <div className={styles.stack}>
        <SectionTitle title="Очередь" note="Все задачи демо-смены" />
        <DataTable columns={columns} rows={rows} />
      </div>
    </Panel>
  );
}
