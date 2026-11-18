/** One task as a table row. */
export type TaskRowVm = {
  /** Task id, used as the row key. */
  readonly id: string;

  /** Task title. */
  readonly title: string;

  /** Assignee name. An em dash when the person is missing. */
  readonly assignee: string;

  /** Status label. */
  readonly status: string;

  /** Visual tone for the status tag. */
  readonly tone: 'neutral' | 'progress' | 'review' | 'done';

  /** Due date as shown. An em dash when the task has no due date. */
  readonly due: string;
};
