import type { TaskStatus } from './task-status';

/** A unit of work assigned to one person. */
export type Task = {
  /** Stable id. */
  readonly id: string;

  /** Short title. */
  readonly title: string;

  /** Employee id of the assignee. Empty when nobody owns it. */
  readonly assigneeId: string;

  /** Current place in the flow. */
  readonly status: TaskStatus;

  /** Due date, yyyy-mm-dd. Empty when the task has no due date. */
  readonly due: string;
};
