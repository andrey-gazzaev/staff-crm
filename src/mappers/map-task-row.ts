import type { Employee, Task, TaskStatus } from '@/models';
import type { TaskRowVm } from '@/view-models';

const statusLabel: Record<TaskStatus, string> = {
  todo: 'К выполнению',
  doing: 'В работе',
  review: 'На ревью',
  done: 'Готово',
};

const statusTone: Record<TaskStatus, TaskRowVm['tone']> = {
  todo: 'neutral',
  doing: 'progress',
  review: 'review',
  done: 'done',
};

const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

/** Task row with the assignee name and a readable due date. */
export function mapTaskRow(task: Task, employees: readonly Employee[]): TaskRowVm {
  const assignee = employees.find((employee) => employee.id === task.assigneeId);

  return {
    id: task.id,
    title: task.title,
    assignee: assignee?.name ?? '—',
    status: statusLabel[task.status],
    tone: statusTone[task.status],
    due: formatDue(task.due),
  };
}

function formatDue(due: string): string {
  if (!due) {
    return '—';
  }

  const [, month, day] = due.split('-');
  const label = months[Number(month) - 1];

  if (!day || !label) {
    return due;
  }

  return `${Number(day)} ${label}`;
}
