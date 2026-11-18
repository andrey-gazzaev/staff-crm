import type { Employee } from './employee';
import type { ProgressPoint } from './progress-point';
import type { Task } from './task';

/** Staff, tasks, and weekly completion for the screens. */
export type StaffSnapshot = {
  /** People on the desk. Empty when nobody is tracked. */
  readonly employees: readonly Employee[];

  /** Tasks assigned to those people. Empty when the queue is clear. */
  readonly tasks: readonly Task[];

  /** Weekly completion, oldest first. Empty when there is no history. */
  readonly progress: readonly ProgressPoint[];
};
