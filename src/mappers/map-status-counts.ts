import type { Task, TaskStatus } from '@/models';
import type { StatusCountVm } from '@/view-models';

const statusOrder: readonly TaskStatus[] = ['todo', 'doing', 'review', 'done'];

const statusLabel: Record<TaskStatus, string> = {
  todo: 'К выполнению',
  doing: 'В работе',
  review: 'На ревью',
  done: 'Готово',
};

const statusTone: Record<TaskStatus, StatusCountVm['tone']> = {
  todo: 'neutral',
  doing: 'progress',
  review: 'review',
  done: 'done',
};

/** Task counts in desk order: queue, active, review, done. */
export function mapStatusCounts(tasks: readonly Task[]): readonly StatusCountVm[] {
  return statusOrder.map((status) => ({
    label: statusLabel[status],
    value: tasks.filter((task) => task.status === status).length,
    tone: statusTone[status],
  }));
}
